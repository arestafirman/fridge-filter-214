// fridge-filter-214 — One Line, One Laugh: Roast Your Fridge.
// Writes a single roast line to /output/entry.txt (no trailing newline).
// Deterministic, no dependencies, no network calls.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My fridge's filter light turned red 214 days ago — it has outlasted my gym membership, my plant, and my will to fix it.";

// Gate: the entry must be 1-200 characters of non-whitespace UTF-8 text.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
