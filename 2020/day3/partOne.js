const {input} = require('./input');

const partOne = (slope = {right: 3, down: 1}) => {
    const {right, down} = slope;
    let trees = 0;
    let position = 0;

    const lines = input.split('\n');
    
    for (let i = down; i < lines.length; i += down) { // move down and skip lines
        const line = lines[i].trim();
        
        // circular move to the right
        const toRight = position + right;
        position = (toRight < line.length) ? toRight : toRight - line.length;

        // on position, ready to check - do I sit on a tree?
        const element = line[position];
        if (element === '#') {
            trees += 1;
        }
    };

    return trees;
};

module.exports = {partOne};


