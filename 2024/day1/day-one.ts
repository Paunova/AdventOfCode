import { input } from "./input";

const sampleInput = `3   4
4   3
2   5
1   3
3   9
3   3`;

const calculateTotalDistance = (input: string, part: number) => {
  let totalDistance = 0;
  let similarityScore = 0;

  const inputByLine = input.split(/\n/);
  const leftSide = inputByLine.map((line) => Number(line.split(" ")[0])).sort();
  const rightSide = inputByLine
    .map((line) => Number(line.split(" ")[3]))
    .sort();

  for (let i = 0; i < leftSide.length; i++) {
    totalDistance += Math.abs(leftSide[i] - rightSide[i]);

    similarityScore +=
      leftSide[i] * rightSide.filter((v) => v === leftSide[i]).length;
  }

  if (part === 1) {
    return totalDistance;
  }
  return similarityScore;
};

console.log(calculateTotalDistance(sampleInput, 1));
console.log(calculateTotalDistance(sampleInput, 2));

console.log(calculateTotalDistance(input, 1));
console.log(calculateTotalDistance(input, 2));
