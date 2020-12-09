const {input} = require('./input');
const {partOne} = require('./partOne');

const getRange = () => {
    const invalidNum = partOne();
    let range = {};

    for (let i = 0; i < input.length; i++) {
        range.min = i;
        input.slice(i).reduce((acc, curr, ind) => {
            if (acc === invalidNum) {
                range.min = i;
                range.max = i + ind;
            }
            return acc + curr;
        });

        if (range.min && range.max) {
            return range;
        }
    }
    return -1;
};

const partTwo = () => {
    const range = getRange();

    if (range.min && range.max) {
        let smallestNum = largestNum = input[range.min];

        for (let j = range.min; j < range.max; j++) {
            if (input[j] > largestNum) {
                largestNum = input[j];
            }
            if (input[j] < smallestNum) {
                smallestNum = input[j];
            }
        }

        return smallestNum + largestNum;
    }
}

module.exports = {partTwo};