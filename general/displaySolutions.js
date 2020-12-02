const RESULT_NONE = 'N/A';

const displaySolutions = (dayCount, first = RESULT_NONE, second = RESULT_NONE) => {
    console.log(`☆ Day ${dayCount} results ☆`);
    console.log('\t> Part one: ', first);
    console.log('\t> Part two: ', second);
};

module.exports = {
    displaySolutions
};
