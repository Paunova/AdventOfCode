import { input } from "./input";

const getMostCalories = (input: string, part: "one" | "two") => {
  const inputByLine = input.split(/\n/);
  const calories: number[] = [];
  let cursor = 0;
  inputByLine.forEach((input) => {
    const calorie = Number(input.trim());
    if (calorie > 0) {
      calories[cursor] = calories[cursor]
        ? calories[cursor] + calorie
        : calorie;
    }
    if (calorie === 0) {
      cursor += 1;
    }
  });
  const caloriesDesc = calories.sort((a, b) => b - a);
  if (part === "two") {
    return caloriesDesc[0] + caloriesDesc[1] + caloriesDesc[2];
  }
  return caloriesDesc[0];
};

console.log(getMostCalories(input, "one"));
console.log(getMostCalories(input, "two"));
