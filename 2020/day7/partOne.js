const {BAG_RULES} = require('./getBagRules');

const hasGoldBag = (values) => {
    if (Object.entries(values).length === 0) {
        return false;
    }
    if (values['shiny gold']) {
        return true;
    }
    return Object.keys(values).some(key => hasGoldBag(BAG_RULES[key]));
};

const partOne = () => {
    let counter = 0;

    for(const [key, values] of Object.entries(BAG_RULES)) {
        if (key !== 'shiny gold') {
            if (hasGoldBag(values)) {
                counter += 1;
            }
        }
    }

    return counter;
};

module.exports = {partOne};

