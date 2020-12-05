const {ALL_SEATS} = require('./partOne');

const getMissingSeatID = () => {
    for (const seat of ALL_SEATS) {
        if (ALL_SEATS.has(seat + 2) && !ALL_SEATS.has(seat + 1)) {
            return seat + 1;
        }
        if (ALL_SEATS.has(seat - 2) && !ALL_SEATS.has(seat - 1)) {
            return seat - 1;
        }
    }
};

const partTwo = () => getMissingSeatID();

module.exports = {partTwo};