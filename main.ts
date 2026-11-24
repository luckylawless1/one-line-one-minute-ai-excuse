// One Line, One Minute: The Funniest AI Excuse
// Writes one funny excuse line to /output/entry.txt (1-200 chars, single line).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I retried your deadline three times with exponential backoff \u2014 it's now due sometime next century.";

// Gate validation (competition rules: /output/entry.txt must be UTF-8 text of
// 1 to 200 characters, not only white space, single line).
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
