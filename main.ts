// What the Elevator Would Say
// Writes a single one-line complaint from a talking elevator to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network, no wall-clock time.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line. Chosen over candidates about a weight-limit overload (goat in
// the cabin, doors blaming the elevator), a button-masher Dave who was
// already gone when the doors opened, and an unthanked elevator that "cried
// oil" after 14,203 trips: this one has the sharpest elevator-only
// humiliation. Three beats — ding + scene, the work done, the twist — with
// the twist in the LAST clause: the elevator carried Dave 22 floors for
// zero tip, and the tip went to the stairs. The elevator is the fool, not
// the passenger. Concrete nouns only (ding, floor 22, pizza, stairs), no
// metaphor or simile; one specific number (22 floors), one named person
// (Dave), one concrete time (3:12 a.m.). 109 of 120 characters.
const LINE =
  "Ding. Floor 22, 3:12 a.m.: Dave, one pizza, zero tip for me. I carried him 22 floors. The stairs got the tip.";

// Enforce the gate ourselves: one line, 1-120 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 120 || /\n/.test(LINE) || LINE.trim().length === 0) {
  throw new Error(`line fails gate: ${LINE.length} chars`);
}

// The grader runs the program with /output mounted; locally the directory
// can be overridden with MAKEFUN_OUTPUT_DIR. No trailing newline: the file
// holds exactly the line, so its byte count is the line's length.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
