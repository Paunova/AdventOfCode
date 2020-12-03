const {input} = require('./input');

const partOne = (slope = {right: 3, down: 1}) => {
    let trees = 0;
    let position = 0;

    const lines = input.split('\n');
    
    for (let i = 1; i < lines.length; i++) { // line at index 0 skipped
        const line = lines[i].trim();

        // nothing to see here, move down by skipping lines  
        if (slope.down === 2 && (i % 2 === 1)) {           
            continue;
        }
        
        // circular move to the right
        const toRight = position + slope.right;
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


