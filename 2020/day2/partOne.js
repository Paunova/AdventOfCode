const {input} = require('./input');
const {getInputArgs} = require('./utils');

const validPasswordByRange = (input) => {
    const {startLimit, endLimit, letter, password} = getInputArgs(input);

    let counter = 0;
    const letters = password.split('');

    for (const i of letters) {
        if (i === letter) {
            counter = counter + 1;
        }
    }

    return counter >= startLimit && counter <= endLimit;
};

const partOne = () => {
    let count = 0;
    for (const i of input) {
        if (validPasswordByRange(i)) {
            count = count + 1;
        }
    }
    return count;
}

module.exports = {partOne};