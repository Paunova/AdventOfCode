const {input} = require('./input');

const partOne = (instructions = input, infinityIndicator) => {
    let accumulator = i = 0;
    let executedInstructions = new Set();
    
    for(;;) {
        if (i === instructions.length) {
            return accumulator; 
        }

        if (i > instructions.length) {
            return -1;
        }

        const [instruction, operand] = instructions[i].split(' ');

        if (executedInstructions.has(i)) {
            return infinityIndicator ? -1 : accumulator; 
        }
        executedInstructions.add(i);

        if (instruction === 'acc') {
            accumulator += Number(operand);
        }

        i += instruction === 'jmp' ? Number(operand) : 1;
    };
};

module.exports = {partOne};