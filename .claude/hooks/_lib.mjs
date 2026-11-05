// Shared helpers for Claude Code hooks (cross-platform, no dependencies).
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

export function readInput() {
  try {
    return JSON.parse(readFileSync(0, "utf8") || "{}");
  } catch {
    return {};
  }
}

export const projectDir = process.env.CLAUDE_PROJECT_DIR || process.cwd();

export function readPackageJson() {
  try {
    return JSON.parse(readFileSync(join(projectDir, "package.json"), "utf8"));
  } catch {
    return null;
  }
}

export function hasScript(name) {
  const pkg = readPackageJson();
  return Boolean(pkg && pkg.scripts && pkg.scripts[name]);
}

export function hasBin(name) {
  return existsSync(join(projectDir, "node_modules", ".bin", name)) ||
    existsSync(join(projectDir, "node_modules", ".bin", name + ".cmd"));
}

// Runs a command and returns { ok, output }. shell:true so pnpm/npx .cmd shims work on Windows.
export function run(cmd, args, timeout = 120000) {
  const r = spawnSync(cmd, args, {
    cwd: projectDir,
    shell: true,
    encoding: "utf8",
    timeout,
  });
  const output = `${r.stdout || ""}${r.stderr || ""}`.trim();
  return { ok: r.status === 0, output };
}

export function normalize(p) {
  return String(p || "").replace(/\\/g, "/");
}
