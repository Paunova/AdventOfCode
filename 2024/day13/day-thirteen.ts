import { input } from "./input";

const sampleInput = `Button A: X+94, Y+34
Button B: X+22, Y+67
Prize: X=8400, Y=5400

Button A: X+26, Y+66
Button B: X+67, Y+21
Prize: X=12748, Y=12176

Button A: X+17, Y+86
Button B: X+84, Y+37
Prize: X=7870, Y=6450

Button A: X+69, Y+23
Button B: X+27, Y+71
Prize: X=18641, Y=10279`;

const sampleInput2 = `Button A: X+94, Y+34
Button B: X+22, Y+67
Prize: X=10000000008400, Y=10000000005400

Button A: X+26, Y+66
Button B: X+67, Y+21
Prize: X=10000000012748, Y=10000000012176

Button A: X+17, Y+86
Button B: X+84, Y+37
Prize: X=10000000007870, Y=10000000006450

Button A: X+69, Y+23
Button B: X+27, Y+71
Prize: X=10000000018641, Y=10000000010279`;

const calculateResult = (input: string, part: number) => {
  let prize_count = 0;
  let token_count = 0;

  const data = input.split(`\n\n`).map((configuration) => {
    const buttonA = configuration.split(`\n`)[0];
    const buttonB = configuration.split(`\n`)[1];
    const prize = configuration.split(`\n`)[2];

    const regexButton = /X\+(\d+), Y\+(\d+)/;
    const regexPrize = /X=(\d+), Y=(\d+)/;

    const matchA = buttonA.match(regexButton);
    const matchB = buttonB.match(regexButton);
    const matchPrize = prize.match(regexPrize);

    if (!matchA || !matchB || !matchPrize) {
      return {
        a: {
          x: 0,
          y: 0,
        },
        b: {
          x: 0,
          y: 0,
        },
        prize: {
          x: 0,
          y: 0,
        },
      };
    }

    return {
      a: {
        x: parseInt(matchA[1], 10),
        y: parseInt(matchA[2], 10),
      },
      b: {
        x: parseInt(matchB[1], 10),
        y: parseInt(matchB[2], 10),
      },
      prize: {
        x: parseInt(matchPrize[1], 10),
        y: parseInt(matchPrize[2], 10),
      },
    };
  });

  if (part === 1) {
    for (let p = 0; p < data.length; p++) {
      for (let i = 1; i <= 100; i++) {
        for (let k = 1; k <= 100; k++) {
          let obj = data[p];
          if (
            i * obj.a.x + k * obj.b.x === obj.prize.x &&
            i * obj.a.y + k * obj.b.y === obj.prize.y
          ) {
            // console.log(`Press A ${i} times, and B ${k} times`);
            prize_count += 1;
            token_count += i * 3 + k * 1;
            break;
          }
        }
      }
    }
  }

  console.log(
    `You can win ${prize_count} prize${
      prize_count > 1 ? "s" : ""
    }, by spending ${token_count} tokens`
  );

  return token_count;
};

console.log(calculateResult(sampleInput, 1));
// console.log(calculateResult(sampleInput2, 2));

console.log(calculateResult(input, 1));
// console.log(calculateResult(input, 2));
