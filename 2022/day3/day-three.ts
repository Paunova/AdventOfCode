import { input } from "./input";

// a - z = 1 - 26
// A - Z = 27 - 52
const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

const getPriorityNumber = (letter: string) => {
  if (letter === letter.toLowerCase()) {
    return ALPHABET.indexOf(letter) + 1;
  }
  return ALPHABET.indexOf(letter.toLowerCase()) + 27;
};

const getPriority = (item: string) => {
  const first = item.substring(0, item.length / 2);
  const second = item.substring(item.length / 2, item.length);

  const uniquesFirst = [...first].reduce((map: any, obj) => {
    map[obj] = obj;
    return map;
  }, {});

  const uniquesSecond = [...second].reduce((map: any, obj) => {
    map[obj] = obj;
    return map;
  }, {});

  let matchLetter = "";
  Object.keys(uniquesFirst).map((a) => {
    Object.keys(uniquesSecond).map((b) => {
      if (a === b) {
        matchLetter = a;
      }
      return b;
    });
    return a;
  });

  return {
    matchLetter,
    priority: getPriorityNumber(matchLetter),
  };
};

const getPriorityForThreeRows = (a: string, b: string, c: string) => {
  const uniquesFirst = [...a].reduce((map: any, obj) => {
    map[obj] = obj;
    return map;
  }, {});

  const uniquesSecond = [...b].reduce((map: any, obj) => {
    map[obj] = obj;
    return map;
  }, {});

  const uniquesThird = [...c].reduce((map: any, obj) => {
    map[obj] = obj;
    return map;
  }, {});

  let matchLetter = "";
  Object.keys(uniquesFirst).map((x) => {
    Object.keys(uniquesSecond).map((z) => {
      Object.keys(uniquesThird).map((y) => {
        if (x === y && y === z) {
          matchLetter = z;
        }
        return y;
      });
      return z;
    });
    return x;
  });

  return {
    matchLetter,
    priority: getPriorityNumber(matchLetter),
  };
};

const getTotalSum = (input: string) => {
  const lines = input.split(/\n/);
  return lines.reduce((sum, line) => {
    return sum + getPriority(line).priority;
  }, 0);
};

const getTotalSumPartTwo = (input: string) => {
  const lines = input.split(/\n/);
  let suma = 0;
  for (let index = 0; index < lines.length; ) {
    if (index + 3 > lines.length) {
      break;
    }
    suma =
      suma +
      getPriorityForThreeRows(lines[index], lines[index + 1], lines[index + 2])
        .priority;
    index = index + 3;
  }
  return suma;
};
// 7967, 2716
console.log(getTotalSum(input));
console.log(getTotalSumPartTwo(input));
