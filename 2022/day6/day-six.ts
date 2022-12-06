import { input } from "./input";

function isUnique(marker: string) {
  const markerArr = marker.split("");
  return new Set(markerArr).size === markerArr.length;
}

const getNumOfProcessedChars = (numOfDistinctChars: number) => {
  for (let i = 0; i < input.length; i++) {
    if (i + numOfDistinctChars > input.length) {
      break;
    }
    const marker = input.substring(i, i + numOfDistinctChars);
    if (isUnique(marker)) {
      return i + numOfDistinctChars;
    }
  }
};

console.log(getNumOfProcessedChars(4));
console.log(getNumOfProcessedChars(14));
