const {input} = require('./input');
const {getInputArgs} = require('./utils');

const validPasswordByAppearance = (input) => {
    const {startLimit, endLimit, letter, password} = getInputArgs(input);

    let counter = 0;
    const letters = password.split('');

    for (i = 0; i < letters.length; i++) {
        if (letters[i] === letter && ((i+1) === startLimit || (i+1) === endLimit)) {
            counter = counter + 1;
        }
    }

    return counter === 1;
};

const partTwo = () => {
    let count = 0;
    for (const i of input) {
        if (validPasswordByAppearance(i)) {
            count = count + 1;
        }
    }
    return count;
};

module.exports = {partTwo};