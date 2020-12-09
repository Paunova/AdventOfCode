const {input} = require('./input');

const preamble = 25;

const getSumOfPairs = () => {
    const SUM_OF_PAIRS = new Map();

    for(let i = 0; i < input.length; i++) {
        for (let k = (i + 1); k < (i + preamble); k++) {
            if (k < input.length) {
                SUM_OF_PAIRS.set(`${i}-${k}`, input[i] + input[k]);
            }
        };
    }

    return SUM_OF_PAIRS;
}

const isValidNum = (min, max, num, sumOfPairs) => {
    for (let i = min; i < max; i++) {
        for (let k = i + 1; k < max; k++) {
            if (sumOfPairs.get(`${i}-${k}`) === num) {
                return true;
            }
        }
    }
    
    return false;
}

const partOne = () => {
    const sumOfPairs = getSumOfPairs();

    for(let i = preamble; i < input.length; i++) {
        if (!isValidNum(i - preamble, i, input[i], sumOfPairs)) {
            return input[i];
        }
    }

    return 0;
};

module.exports = {partOne};