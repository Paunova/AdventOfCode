const _ = require('lodash');
let {input} = require('./input');

const IS_OCCUPIED = '#';
const IS_EMPTY = 'L';

const getOccupiedSeatsNearby = (layout, rowNumber, seatNumber) => {
    const seatNeighbours = [
        layout[rowNumber][seatNumber - 1], // left
        layout[rowNumber][seatNumber + 1] // right
    ];
    if (rowNumber - 1 >= 0) { // row above
        seatNeighbours.push(layout[rowNumber - 1][seatNumber]);
        seatNeighbours.push(layout[rowNumber - 1][seatNumber - 1]);
        seatNeighbours.push(layout[rowNumber - 1][seatNumber + 1]);
    }
    if (rowNumber + 1 < layout.length) { // row below
        seatNeighbours.push(layout[rowNumber + 1][seatNumber]);
        seatNeighbours.push(layout[rowNumber + 1][seatNumber - 1]);
        seatNeighbours.push(layout[rowNumber + 1][seatNumber + 1]);
    }
    return seatNeighbours.filter(seat => seat === IS_OCCUPIED);
}

const partOne = () => {
    while(true) {
        let occupiedSeats = 0;
        let nextLayout = [];
        const layout = input.trim().split('\n');
        for(let rowNumber = 0; rowNumber < layout.length; rowNumber++) {
            const row = layout[rowNumber].trim().split('');
            const nextRow = [];

            for(let seatNumber = 0; seatNumber < row.length; seatNumber++) {
                const occupiedSeatsNearby = _.size(getOccupiedSeatsNearby(layout, rowNumber, seatNumber));

                nextRow[seatNumber] = row[seatNumber];
                if (occupiedSeatsNearby >= 4 && row[seatNumber] === IS_OCCUPIED) {
                    nextRow[seatNumber] = IS_EMPTY;
                }
                if (occupiedSeatsNearby === 0 && row[seatNumber] === IS_EMPTY) {
                    nextRow[seatNumber] = IS_OCCUPIED;
                }
                if (nextRow[seatNumber] === IS_OCCUPIED) {
                    occupiedSeats += 1;
                }
            }
            nextLayout = nextLayout + '\n' + nextRow.join('');
        }

        if (_.isEqual(input, nextLayout)) { // no more seat adjustements
            return occupiedSeats;
        }
        input = _.cloneDeep(nextLayout); // next round
    }
};

module.exports = {partOne};