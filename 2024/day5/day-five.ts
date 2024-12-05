import { input } from "./input";

const sampleInput = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`;

const getPageOrderingRules = (rules: string) => {
  const rulesArr = rules.split("\n");
  return new Set(rulesArr);
};

const getFixedUpdateOrder = (
  pageNumbers: string[],
  pageOrderRules: Set<string>
) => {
  return pageNumbers.sort((a: string, b: string) => {
    if (pageOrderRules.has(`${a}|${b}`)) {
      return -1;
    }
    return 1;
  });
};

const getMiddlePageNumber = (pageNumbers: string[]) => {
  if (pageNumbers.length % 2 === 0) {
    return 0;
  }
  return Number(pageNumbers[Math.floor(pageNumbers.length / 2)]);
};

const calculateResult = (input: string, part: number) => {
  let result = 0;

  const inputSplitByTwo = input.split("\n\n");
  const pageOrderRules = getPageOrderingRules(inputSplitByTwo[0]);
  const updates = inputSplitByTwo[1].split("\n");

  for (let i = 0; i < updates.length; i++) {
    const pageNumbers = updates[i].split(",");
    let areValidUpdates: Boolean[] = [];
    for (let j = 0; j < pageNumbers.length; j++) {
      for (let k = j + 1; k < pageNumbers.length; k++) {
        areValidUpdates.push(
          pageOrderRules.has(`${pageNumbers[j]}|${pageNumbers[k]}`)
        );
      }
    }
    const isValidUpdate = areValidUpdates.every(Boolean);

    if (!isValidUpdate && part === 2) {
      const fixedUpdate = getFixedUpdateOrder(pageNumbers, pageOrderRules);
      result += getMiddlePageNumber(fixedUpdate);
    }

    if (isValidUpdate && part === 1) {
      result += getMiddlePageNumber(pageNumbers);
    }
  }

  return result;
};

console.log(calculateResult(sampleInput, 1));
console.log(calculateResult(sampleInput, 2));

console.log(calculateResult(input, 1));
console.log(calculateResult(input, 2));
