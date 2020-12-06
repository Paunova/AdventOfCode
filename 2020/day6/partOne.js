
const {input} = require('./input');

const partOne = () => {
    const groups = input.split('\n\n');

    let answers = 0;
    
    for(let group of groups) {
        const answersByGroup = new Set(group.replace(/\n/g, ''));
        answers += answersByGroup.size;
    }

    return answers;
}

module.exports = {partOne};