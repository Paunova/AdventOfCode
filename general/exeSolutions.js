const fs = require('fs');

const {getCurrentDay, getCurrentYear} = require('../general/dateUtils');
const {displaySolutions} = require('../general/displaySolutions');

const CUSTOM_DAY = 1; // Defaults to 0
const DAY_COUNT = CUSTOM_DAY ? CUSTOM_DAY : getCurrentDay();
const basePath = `../${getCurrentYear()}/day${DAY_COUNT}`;

try {
    const solutionExists = fs.existsSync(`${basePath}/input.js`);

    if (!solutionExists && !CUSTOM_DAY) {
        throw new Error('No solution for today. Please set CUSTOM_DAY value!');
    }

    const {partOne} = require(`${basePath}/partOne`);
    const {partTwo} = require(`${basePath}/partTwo`);
    
    displaySolutions(DAY_COUNT, partOne(), partTwo());
} catch(err) {
    console.log(err)
}
