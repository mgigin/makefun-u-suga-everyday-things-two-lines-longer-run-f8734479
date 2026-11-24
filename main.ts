// Everyday Things, Two Lines, Longer Run
// Entry: a tap explained to a 10-year-old as a little waterfall.
// v3 (final): line 1 sharpened — the waterfall now sits above the kitchen
// sink and starts on a twist of the handle: concrete, surprising, one
// metaphor, one sentence. Line 2 unchanged from v2.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "A tap is a little waterfall above your kitchen sink that starts pouring the moment you twist its handle.\n" +
  "It maps the falling water and switching the flow on and off with a twist, but leaves out that a real waterfall never stops, is fed by a river far away, and would flood your whole kitchen.\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
