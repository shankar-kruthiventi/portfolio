// PreToolUse guard. Enforces the "Do not" rules in CLAUDE.md:
//  - never edit docs/ (source of truth and design references)
//  - ask before adding dependencies
//  - never commit or push directly to main/master
import { spawnSync } from "node:child_process";
import { readInput, projectDir, normalize } from "./_lib.mjs";

const input = readInput();
const tool = input.tool_name;
const args = input.tool_input || {};

function decide(decision, reason) {
  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        permissionDecision: decision,
        permissionDecisionReason: reason,
      },
    })
  );
  process.exit(0);
}

if (tool === "Edit" || tool === "Write" || tool === "MultiEdit") {
  const file = normalize(args.file_path);
  const root = normalize(projectDir).replace(/\/$/, "");
  const rel = file.toLowerCase().startsWith(root.toLowerCase() + "/")
    ? file.slice(root.length + 1)
    : file;
  if (/^docs\//i.test(rel)) {
    decide(
      "deny",
      "docs/ is read-only for Claude (content source of truth and design references). Ask the user to change it."
    );
  }
}

if (tool === "Bash") {
  const cmd = String(args.command || "");

  // Dependency changes need explicit approval.
  const addsDeps =
    /\b(pnpm|npm|yarn|bun)\s+(add|install|i)\s+(?!--frozen|--ignore|-D\s*$)\S/.test(cmd) ||
    /\b(pnpm|npm|yarn|bun)\s+(add|install|i)\b.*\s(-D|--save-dev|-S|--save|-g|--global)\b/.test(cmd);
  if (addsDeps) {
    decide("ask", "This adds a dependency. CLAUDE.md requires asking first.");
  }

  // No direct commits or pushes to main.
  if (/\bgit\s+(commit|push|merge)\b/.test(cmd)) {
    const r = spawnSync("git", ["rev-parse", "--abbrev-ref", "HEAD"], {
      cwd: projectDir,
      encoding: "utf8",
      shell: true,
    });
    const branch = (r.stdout || "").trim();
    const pushesMain = /\bgit\s+push\b.*\b(main|master)\b/.test(cmd);
    if (branch === "main" || branch === "master" || pushesMain) {
      decide(
        "deny",
        "Direct commits/pushes to main are not allowed. Create a feature branch first (git switch -c feat/<name>)."
      );
    }
  }
}

process.exit(0);
