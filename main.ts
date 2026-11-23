// Pitch: one line naming a hilariously useless superpower.
// The power sounds useful until the pigeon-only limit lands: every
// thought it reads is crumbs, traffic, or a grudge — trivial and
// useless, which is the whole joke. This program writes that single
// line to the entry file.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const USELESS_SUPERPOWER_LINE =
  "I can read minds, but only pigeons — and every thought is crumbs, traffic, and a grudge against one specific statue.";

function writeEntry(dir: string, line: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), line + "\n", "utf8");
}

function main(): void {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  writeEntry(dir, USELESS_SUPERPOWER_LINE);
  console.log(`entry.txt: ${[...USELESS_SUPERPOWER_LINE].length} characters`);
}

main();
