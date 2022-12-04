import { input } from "./input";

// A for Rock, B for Paper, and C for Scissors
// X for Rock, Y for Paper, and Z for Scissors.

// The score for a single round is the score for the shape you selected
// (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the outcome of the round
// (0 if you lost, 3 if the round was a draw, and 6 if you won).

// Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock.
const scoreMap: any = {
  "A X": 3,
  "A Y": 6,
  "A Z": 0,
  "B X": 0,
  "B Y": 3,
  "B Z": 6,
  "C X": 6,
  "C Y": 0,
  "C Z": 3,
};

// X - LOSE, Y - DRAW, Z - WIN
const scoreMapPartTwo: any = {
  "A X": 0,
  "A Y": 3,
  "A Z": 6,
  "B X": 0,
  "B Y": 3,
  "B Z": 6,
  "C X": 0,
  "C Y": 3,
  "C Z": 6,
};

const ScoreByShape: any = {
  "A X": 3,
  "A Y": 1, 
  "A Z": 2,
  "B X": 1,
  "B Y": 2,
  "B Z": 3,
  "C X": 2,
  "C Y": 3,
  "C Z": 1,
};

const RoundPoint: any = {
  X: 1,
  Y: 2,
  Z: 3,
};

const getTotalPoints = (input: string) => {
  const inputByLine = input.split(/\n/);
  let totalPoints = 0;
  let totalPointRoundTwo = 0;
  inputByLine.forEach((input: string) => {
    const pointsByRound = Number(scoreMap[input]);
    const [_opponentShape, _, myShape] = input.split("");
    const pointsByShape = RoundPoint[myShape];
    totalPointRoundTwo = totalPointRoundTwo + Number(scoreMapPartTwo[input]) + ScoreByShape[input];
    totalPoints = totalPoints + pointsByRound + pointsByShape;
  });
  console.log(totalPoints, totalPointRoundTwo);
};

// 13526, 14204
getTotalPoints(input);
