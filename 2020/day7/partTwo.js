const {BAG_RULES} = require('./getBagRules');

const shinyBag = BAG_RULES['shiny gold'];

const countIncludedBags = (content) => {
  if (Object.keys(content).length === 0) {
    return 0;
  }
  return Object.keys(content)
    .map((key) => {
      const numOfBags = content[key];
      return numOfBags + numOfBags * countIncludedBags(BAG_RULES[key]);
    })
    .reduce((acc, curr) => acc + curr, 0);
};

const partTwo = () => countIncludedBags(shinyBag);

module.exports = {partTwo};

