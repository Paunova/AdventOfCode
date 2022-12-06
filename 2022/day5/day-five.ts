import { input } from "./input";

const getResult = (part: 'one' | 'two') => {
  const lines = input.split(/\n/);
  const crateLines = lines.slice(1, 9).reverse();
  const instructions = lines.slice(11);

  const result: any = [[], [], [], [], [], [], [], [], []];
  crateLines.map((cl) => {
    const clArr = cl.match(/.{1,4}/g);
    clArr &&
      clArr.map((a, index) => {
        if (a.trim().length > 0) {
          result[index].push(a.trim().split("")[1]);
        }
      });
  });

  instructions.map((instruction) => {
    const instructionsSplit = instruction.split(" ");
    const numOf = Number(instructionsSplit[1]);
    const fromPosition = Number(instructionsSplit[3]);
    const toPosition = Number(instructionsSplit[5]);

    if (part === 'one') {
    for (let i = 0; i < numOf; i++) {
      const element = result[fromPosition - 1].pop();
      result[toPosition - 1].push(element);
    }
    }

    if (part === 'two') {
        const reversedArr: any = [];
        for (let i = 0; i < numOf; i++) {
          const element = result[fromPosition - 1].pop();
          reversedArr.push(element);
        }
        for (let i = 0; i < numOf; i++) {
          const element = reversedArr.pop();
          result[toPosition - 1].push(element);
        }
    }

  });

  const finalResult = result.reduce((res: string, el: any) => {
    return res + el.pop();
  }, "");

  return finalResult;
};

console.log(getResult('one'));
console.log(getResult('two'));
