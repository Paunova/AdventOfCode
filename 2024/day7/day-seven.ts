import { input } from "./input";

const sampleInput = `190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`;

const getEquationResultRecursive = (
  calibrationResult: number,
  result: number,
  remainingNumbers: number[],
  part: number
): Boolean => {
  if (result > calibrationResult) {
    return false;
  }
  if (remainingNumbers.length === 0) {
    return result === calibrationResult;
  }

  const currentNumber = remainingNumbers[0];
  const sum = result + currentNumber;
  const prod = result * currentNumber;
  const concat = parseInt(`${result}${currentNumber}`, 10);

  if (part === 1) {
    return (
      getEquationResultRecursive(
        calibrationResult,
        sum,
        remainingNumbers.slice(1),
        part
      ) ||
      getEquationResultRecursive(
        calibrationResult,
        prod,
        remainingNumbers.slice(1),
        part
      )
    );
  }
  return (
    getEquationResultRecursive(
      calibrationResult,
      sum,
      remainingNumbers.slice(1),
      part
    ) ||
    getEquationResultRecursive(
      calibrationResult,
      prod,
      remainingNumbers.slice(1),
      part
    ) ||
    getEquationResultRecursive(
      calibrationResult,
      concat,
      remainingNumbers.slice(1),
      part
    )
  );
};

const calculateResult = (input: string, part: number) => {
  let result = 0;

  const inputByLine = input.split("\n");

  for (let i = 0; i < inputByLine.length; i++) {
    const calibrationResult = Number(inputByLine[i].split(": ")[0]);
    const equation = inputByLine[i]
      .split(": ")[1]
      .split(" ")
      .map((el) => Number(el));

    const equationResult = getEquationResultRecursive(
      calibrationResult,
      equation[0],
      equation.slice(1),
      part
    );

    if (equationResult) {
      result += calibrationResult;
    }
  }

  return result;
};

console.log(calculateResult(sampleInput, 1));
console.log(calculateResult(sampleInput, 2));

console.log(calculateResult(input, 1));
console.log(calculateResult(input, 2));
