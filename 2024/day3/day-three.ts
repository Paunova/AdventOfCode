import fs from "fs";

const input = fs.readFileSync("input.txt", "utf8");

//const sampleInput = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;
const sampleInput = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;

const calculateMultiplications = (input: string, part: number) => {
  let result = 0;
  let doMultiply = 1;
  const inputArr = input.split("");

  for (let i = 0; i < inputArr.length; i++) {
    if (part === 2) {
      if (input.slice(i, i + 4) === "do()") {
        doMultiply = 1;
      }
      if (input.slice(i, i + 7) === "don't()") {
        doMultiply = 2;
      }
    }

    if (doMultiply === 1 && input.slice(i, i + 4) === "mul(") {
      let firstNumber = "";
      let firstNumberDigits = 0;
      let secondNumber = "";

      // Get the first number
      if (!isNaN(parseInt(input[i + 4])) && input[i + 5] === ",") {
        firstNumber = input[i + 4];
        firstNumberDigits = 1;
      } else if (
        !isNaN(parseInt(input[i + 4])) &&
        !isNaN(parseInt(input[i + 5])) &&
        input[i + 6] === ","
      ) {
        firstNumber = `${input[i + 4]}${input[i + 5]}`;
        firstNumberDigits = 2;
      } else if (
        !isNaN(parseInt(input[i + 4])) &&
        !isNaN(parseInt(input[i + 5])) &&
        !isNaN(parseInt(input[i + 6])) &&
        input[i + 7] === ","
      ) {
        firstNumber = `${input[i + 4]}${input[i + 5]}${input[i + 6]}`;
        firstNumberDigits = 3;
      }
      // Get the second number
      if (firstNumberDigits > 0) {
        if (
          !isNaN(parseInt(input[i + 5 + firstNumberDigits])) &&
          input[i + 6 + firstNumberDigits] === ")"
        ) {
          secondNumber = input[i + 5 + firstNumberDigits];
        } else if (
          !isNaN(parseInt(input[i + 5 + firstNumberDigits])) &&
          !isNaN(parseInt(input[i + 6 + firstNumberDigits])) &&
          input[i + 7 + firstNumberDigits] === ")"
        ) {
          secondNumber = `${input[i + 5 + firstNumberDigits]}${
            input[i + 6 + firstNumberDigits]
          }`;
        } else if (
          !isNaN(parseInt(input[i + 5 + firstNumberDigits])) &&
          !isNaN(parseInt(input[i + 6 + firstNumberDigits])) &&
          !isNaN(parseInt(input[i + 7 + firstNumberDigits])) &&
          input[i + 8 + firstNumberDigits] === ")"
        ) {
          secondNumber = `${input[i + 5 + firstNumberDigits]}${
            input[i + 6 + firstNumberDigits]
          }${input[i + 7 + firstNumberDigits]}`;
        }
      }
      // Multiply valid instruction
      if (firstNumber && secondNumber) {
        result += parseInt(firstNumber) * parseInt(secondNumber);
      }
    }
  }
  return result;
};

console.log(calculateMultiplications(sampleInput, 1));
console.log(calculateMultiplications(sampleInput, 2));

console.log(calculateMultiplications(input, 1));
console.log(calculateMultiplications(input, 2));
