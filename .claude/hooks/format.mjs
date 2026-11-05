// PostToolUse: format the file Claude just edited, then lint-fix JS/TS.
// Silent no-op until prettier/eslint are installed. Remaining lint errors are fed back to Claude.
import { existsSync } from "node:fs";
import { readInput, hasBin, run, normalize } from "./_lib.mjs";

const input = readInput();
const file = normalize((input.tool_input || {}).file_path);

if (!file || !existsSync(file)) process.exit(0);
if (/(^|\/)(node_modules|dist|build|docs)\//.test(file)) process.exit(0);

const isCode = /\.(ts|tsx|js|jsx|mjs|cjs)$/.test(file);
const isFormattable = isCode || /\.(css|json|html)$/.test(file);
if (!isFormattable) process.exit(0);

if (hasBin("prettier")) {
  run("npx", ["--no-install", "prettier", "--write", `"${file}"`], 30000);
}

if (isCode && hasBin("eslint")) {
  const r = run("npx", ["--no-install", "eslint", "--fix", `"${file}"`], 45000);
  if (!r.ok && r.output) {
    process.stderr.write(`ESLint problems remain in ${file}:\n${r.output}\n`);
    process.exit(2); // feeds the message back to Claude
  }
}

process.exit(0);
