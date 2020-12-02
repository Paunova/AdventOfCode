const {expensesReport} = require('./input');

const partOne = () => {
    for (const i of expensesReport) {
        for (const j of expensesReport) {
            if (i + j === 2020) {
                return i * j;
            }
        }
    }
};

module.exports = {partOne};