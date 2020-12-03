const {partOne} = require('./partOne');

const partTwo = () => {
    let treesMultiplied = 1;

    const slopes = [
        {right: 1, down: 1}, 
        {right: 3, down: 1}, 
        {right: 5, down: 1}, 
        {right: 7, down: 1}, 
        {right: 1, down: 2}
    ];

    for (const slope of slopes) {
        const trees = partOne(slope);
        treesMultiplied *= trees;
    };
    
    return treesMultiplied;
};

module.exports = {partTwo};