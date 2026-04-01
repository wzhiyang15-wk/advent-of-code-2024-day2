const fs = require("fs");

function isSafe(levels) {
  if (levels.length < 2) return true;

  const diffs = [];
  for (let i = 0; i < levels.length - 1; i++) {
    diffs.push(levels[i + 1] - levels[i]);
  }

  const allIncreasing = diffs.every((d) => d > 0);
  const allDecreasing = diffs.every((d) => d < 0);

  if (!allIncreasing && !allDecreasing) {
    return false;
  }

  return diffs.every((d) => Math.abs(d) >= 1 && Math.abs(d) <= 3);
}

function countSafeReports(input) {
  const lines = input.trim().split("\n");

  let safeCount = 0;

  for (const line of lines) {
    const levels = line.trim().split(/\s+/).map(Number);
    if (isSafe(levels)) {
      safeCount++;
    }
  }

  return safeCount;
}

const input = fs.readFileSync("input.txt", "utf8");
const result = countSafeReports(input);

console.log("Safe reports:", result);
