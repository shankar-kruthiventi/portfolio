// Stop hook: Claude cannot finish while typecheck or lint fail (CLAUDE.md rule).
// Skips cleanly when the scripts do not exist yet (e.g. before the Vite scaffold).
import { readInput, hasScript, run } from "./_lib.mjs";

const input = readInput();

// Prevent infinite loops: if we already blocked once this turn, let Claude stop.
if (input.stop_hook_active) process.exit(0);

const failures = [];

for (const script of ["typecheck", "lint"]) {
  if (!hasScript(script)) continue;
  const r = run("pnpm", ["run", script], 80000);
  if (!r.ok) {
    const tail = r.output.split("\n").slice(-40).join("\n");
    failures.push(`pnpm ${script} failed:\n${tail}`);
  }
}

if (failures.length) {
  process.stderr.write(
    `Do not finish yet. Fix these first:\n\n${failures.join("\n\n")}\n`
  );
  process.exit(2);
}

process.exit(0);
