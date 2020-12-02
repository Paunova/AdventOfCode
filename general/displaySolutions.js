const RESULT_NONE = 'N/A';

const getCurrentDay = () => {
    const dateNow = new Date();
    const timestampNow = dateNow.getTime(); // ms
    const timezoneOffset = dateNow.getTimezoneOffset(); // min
    const localTimestamp = timestampNow + (timezoneOffset * 60);
    return new Date(localTimestamp).getDate();
};

const displaySolutions = (first = RESULT_NONE, second = RESULT_NONE) => {
    console.log(`☆ Day ${getCurrentDay()} results ☆`);
    console.log('\t> Part one: ', first);
    console.log('\t> Part two: ', second);
};

module.exports = {
    displaySolutions
};
