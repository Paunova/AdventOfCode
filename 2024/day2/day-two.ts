import { input } from "./input";

const sampleInput = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

const differBy = (a: number, b: number) => Math.abs(a - b);

const analyzeSingleReport = (report: string[]) => {
  let isSafe = 0;

  for (let j = 0; j < report.length - 1; j++) {
    const currentLevel = Number(report[j]);
    const nextLevel = Number(report[j + 1]);

    if (currentLevel === nextLevel) {
      isSafe = -1;
    }

    const differNumber = differBy(currentLevel, nextLevel);
    const isDifferValid = differNumber > 0 && differNumber <= 3;

    if (!isDifferValid) {
      isSafe = -1;
    }

    // check if levels are in asc or desc order
    if (currentLevel < nextLevel && isSafe === 0) {
      isSafe = 1;
    }
    if (currentLevel > nextLevel && isSafe === 0) {
      isSafe = 2;
    }

    // check if levels order is broken
    if (currentLevel > nextLevel && isSafe === 1) {
      isSafe = -1;
    }
    if (currentLevel < nextLevel && isSafe === 2) {
      isSafe = -1;
    }
  }
  return isSafe;
};

const analyzeSafeReports = (input: string, part: number) => {
  let numberOfSafeReports = 0;

  const inputByLine = input.split(/\n/);

  for (let i = 0; i < inputByLine.length; i++) {
    const report = inputByLine[i].split(" ");
    const isSafe = analyzeSingleReport(report);

    let isSafeAfterAdjustment = false;
    // only check broken reports
    if (part === 2 && isSafe === -1) {
      // try all combinations with any single level removed
      for (let k = 0; k < report.length; k++) {
        const adjustedArr = [
          ...report.slice(0, k),
          ...report.slice(k + 1, report.length),
        ];
        const singleResult = analyzeSingleReport(adjustedArr);
        if (singleResult === 1 || singleResult === 2) {
          isSafeAfterAdjustment = true;
        }
      }
    }

    if (isSafe === 1 || isSafe === 2 || isSafeAfterAdjustment) {
      numberOfSafeReports += 1;
    }
  }
  return numberOfSafeReports;
};

console.log(analyzeSafeReports(sampleInput, 1));
console.log(analyzeSafeReports(sampleInput, 2));

console.log(analyzeSafeReports(input, 1));
console.log(analyzeSafeReports(input, 2));
