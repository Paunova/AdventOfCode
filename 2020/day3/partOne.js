const {input} = require('./input');

const partOne = (slope = {right: 3, down: 1}) => {
    let trees = 0;
    let position = 0;

    const lines = input.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        // nothing to see here, skip line (move down)
        if (i === 0) {
            continue;
        }
        if (slope.down === 2 && (i % 2 === 1)) {           
            continue;
        }
        // move to the right
        const toRight = position + slope.right;
        if (toRight < line.length) {
            position = toRight;
        } else {
            position = toRight - line.length;
        }
        // on position, ready to check - do I sit on a tree?
        const element = line[position];
        if (element === '#') {
            trees += 1;
        }
    };

    return trees;
};

module.exports = {partOne};


