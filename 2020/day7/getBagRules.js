const {input} = require('./input');

const BAG_RULES = {};

for(let i = 0; i < input.length; i++) {
    const [mainBag, includedBags] = input[i].split(' bags contain ');
    BAG_RULES[mainBag] = includedBags
        .slice(0, includedBags.length - 1) // omit .
        .split(', ')
        .filter(node => node !== 'no other bags')
        .reduce((result, line) => {
            const [amount, shade, color] = line.split(' ');
            result[`${shade} ${color}`] = Number(amount);
            return result;
        }, {});
}

module.exports = {BAG_RULES};