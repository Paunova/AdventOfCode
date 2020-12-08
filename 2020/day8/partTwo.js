const {input} = require('./input');
const {partOne} = require('./partOne');

const partTwo = () => {
    for(let i = 0; i < input.length; i++) {
        const [instruction, operand] = input[i].split(' ');
        let inputCopy = [...input];

        if (instruction !== 'acc') {
            const replacedInstruction = instruction === 'jmp' ? 'nop' : 'jmp';
            inputCopy[i] = `${replacedInstruction} ${operand}`;
            
            const result = partOne(inputCopy, true);
            if (result > 0) {
                return result;
            };
        }
    }
}

module.exports = {partTwo};