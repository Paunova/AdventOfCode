import { input } from "./input";

const sampleInput = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

const sampleInputPart2 = `.M.S......
..A..MSMS.
.M.S.MAA..
..A.ASMSM.
.M.S.M....
..........
S.S.S.S.S.
.A.A.A.A..
M.M.M.M.M.
..........`;

const calculateXmasAppearance = (input: string, part: number) => {
  let result = 0;
  let resultPart2 = 0;

  const inputByLine = input.split(/\n/).map((line) => line.split(""));

  for (let i = 0; i < inputByLine.length; i++) {
    for (let j = 0; j < inputByLine[i].length; j++) {
      if (inputByLine[i][j] === "A") {
        // SAM and SAM
        if (
          inputByLine[i - 1] &&
          inputByLine[i + 1] &&
          inputByLine[i - 1][j - 1] === "S" &&
          inputByLine[i - 1][j + 1] === "S" &&
          inputByLine[i + 1][j - 1] === "M" &&
          inputByLine[i + 1][j + 1] === "M"
        ) {
          resultPart2 += 1;
        }
        // SAM and MAS
        if (
          inputByLine[i - 1] &&
          inputByLine[i + 1] &&
          inputByLine[i - 1][j - 1] === "S" &&
          inputByLine[i - 1][j + 1] === "M" &&
          inputByLine[i + 1][j - 1] === "S" &&
          inputByLine[i + 1][j + 1] === "M"
        ) {
          resultPart2 += 1;
        }
        // MAS and MAS
        if (
          inputByLine[i - 1] &&
          inputByLine[i + 1] &&
          inputByLine[i - 1][j - 1] === "M" &&
          inputByLine[i - 1][j + 1] === "M" &&
          inputByLine[i + 1][j - 1] === "S" &&
          inputByLine[i + 1][j + 1] === "S"
        ) {
          resultPart2 += 1;
        }
        // MAS and SAM
        if (
          inputByLine[i - 1] &&
          inputByLine[i + 1] &&
          inputByLine[i - 1][j - 1] === "M" &&
          inputByLine[i - 1][j + 1] === "S" &&
          inputByLine[i + 1][j - 1] === "M" &&
          inputByLine[i + 1][j + 1] === "S"
        ) {
          resultPart2 += 1;
        }
      }
      // horizontal
      if (
        inputByLine[i][j] === "X" &&
        inputByLine[i][j + 1] === "M" &&
        inputByLine[i][j + 2] === "A" &&
        inputByLine[i][j + 3] === "S"
      ) {
        result += 1;
      }
      // horizontal backwards
      if (
        inputByLine[i][j] === "X" &&
        inputByLine[i][j - 1] === "M" &&
        inputByLine[i][j - 2] === "A" &&
        inputByLine[i][j - 3] === "S"
      ) {
        result += 1;
      }
      // vertical
      if (
        inputByLine[i + 3] &&
        inputByLine[i][j] === "X" &&
        inputByLine[i + 1][j] === "M" &&
        inputByLine[i + 2][j] === "A" &&
        inputByLine[i + 3][j] === "S"
      ) {
        result += 1;
      }
      // vertical backwards
      if (
        inputByLine[i - 3] &&
        inputByLine[i][j] === "X" &&
        inputByLine[i - 1][j] === "M" &&
        inputByLine[i - 2][j] === "A" &&
        inputByLine[i - 3][j] === "S"
      ) {
        result += 1;
      }
      // diagonal down right
      if (
        inputByLine[i + 3] &&
        inputByLine[i][j] === "X" &&
        inputByLine[i + 1][j + 1] === "M" &&
        inputByLine[i + 2][j + 2] === "A" &&
        inputByLine[i + 3][j + 3] === "S"
      ) {
        result += 1;
      }
      // diagonal down left
      if (
        inputByLine[i + 3] &&
        inputByLine[i][j] === "X" &&
        inputByLine[i + 1][j - 1] === "M" &&
        inputByLine[i + 2][j - 2] === "A" &&
        inputByLine[i + 3][j - 3] === "S"
      ) {
        result += 1;
      }
      // diagonal up right
      if (
        inputByLine[i - 3] &&
        inputByLine[i][j] === "X" &&
        inputByLine[i - 1][j + 1] === "M" &&
        inputByLine[i - 2][j + 2] === "A" &&
        inputByLine[i - 3][j + 3] === "S"
      ) {
        result += 1;
      }
      // diagonal up left
      if (
        inputByLine[i - 3] &&
        inputByLine[i][j] === "X" &&
        inputByLine[i - 1][j - 1] === "M" &&
        inputByLine[i - 2][j - 2] === "A" &&
        inputByLine[i - 3][j - 3] === "S"
      ) {
        result += 1;
      }
    }
  }

  if (part === 2) {
    return resultPart2;
  }
  return result;
};

console.log(calculateXmasAppearance(sampleInput, 1));
console.log(calculateXmasAppearance(sampleInputPart2, 2));

console.log(calculateXmasAppearance(input, 1));
console.log(calculateXmasAppearance(input, 2));
