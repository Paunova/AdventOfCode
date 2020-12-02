const {expensesReport} = require('./input');

const partTwo = () => {
    for (const i of expensesReport) {
        for (const j of expensesReport) {
            for (const k of expensesReport) {
                if (i + j + k === 2020) {
                    return i * j * k;
                }
            }
        }
    }
};

module.exports = {partTwo};