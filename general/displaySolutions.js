const RESULT_NONE = 'N/A';

const {getCurrentDay} = require('../general/dateUtils');

const displaySolutions = (first = RESULT_NONE, second = RESULT_NONE) => {
    console.log(`☆ Day ${getCurrentDay()} results ☆`);
    console.log('\t> Part one: ', first);
    console.log('\t> Part two: ', second);
};

module.exports = {
    displaySolutions
};
