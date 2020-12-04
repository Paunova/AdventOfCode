const {partOne} = require('./partOne');

// get total valid passports that contain all the required and validated fields
const partTwo = () => {
    return partOne(true);
};

module.exports = {partTwo};