const {input} = require('./input');

let ALL_SEATS = new Set();

const getSeatID = (directions) => {
    let min = 0;
    let middle = 0;
    let max = 127;
    let row, column;

    for(const direction of directions) {
        middle = Math.ceil((max - min) / 2);
        if (direction === 'F') {
            max = max - middle;
            row = min;
        }
        if (direction === 'B') {
            min = min + middle;
            row = max;
        }
    }

    max = 7;
    min = middle = 0; 
    
    for(const direction of directions) {
        middle = Math.ceil((max - min) / 2);
        if (direction === 'L') {
            max = max - middle;
            column = min;
        }
        if (direction === 'R') {
            min = min + middle;
            column = max;
        }
    }

    const seatID = Math.floor((row * 8) + column);
    ALL_SEATS.add(seatID);

    return seatID;
};

const getHighestSeatID = () => {
    let maxSeat = 0;
    for(const directions of input) {
        const seatID = getSeatID(directions);
        if (seatID > maxSeat) {
            maxSeat = seatID;
        }
    }
    return maxSeat;
};

const partOne = () => getHighestSeatID();

module.exports = {partOne, ALL_SEATS};