import { input } from "./input";

const getDayFourResult = () => {
  const lines = input.split(/\n/);
  let counter = 0;
  let counter2 = 0;
  lines.map((line) => {
    const pairs = line.split(",");
    const [p1, p2] = pairs[0].split("-").map((p: string) => Number(p));
    const [r1, r2] = pairs[1].split("-").map((p: string) => Number(p));
    if ((p1 <= r1 && p2 >= r2) || (r1 <= p1 && r2 >= p2)) {
      counter = counter + 1;
    }
    if (p2 >= r1 && r2 >= p1) {
      counter2 = counter2 + 1;
    }
  });
  console.log(counter, counter2);
};

getDayFourResult();