// One Word, First Thought — a single word, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// defenestration: the act of throwing someone out of a window.
// Surprising, vivid, and funny — a word that rewards a second look.
const word = "defenestration";

// The gate allows 1 to 24 characters and exactly one word.
if (word.length < 1 || word.length > 24 || /\s/.test(word)) {
  throw new Error("entry must be exactly one word of 1-24 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
