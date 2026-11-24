import * as fs from "node:fs";

// One-line weather forecast for a city that does not exist.
// Brolly Bay: a commuter town where the rain falls upwards, so the
// morning rush arrives dry, smug, and five minutes early for once.
// The gate allows 1 to 140 characters of UTF-8 text, so the program
// refuses to write a line that would fail it.
const forecast =
  "In Brolly Bay, light rain falls upwards all morning, 14°C, so commuters arrive dry, smug, and five minutes early for once.";

const chars = [...forecast].length;
if (chars < 1 || chars > 140 || forecast.trim().length === 0) {
  throw new Error(`forecast is ${chars} characters, outside the 1-140 gate`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", forecast, "utf8");
