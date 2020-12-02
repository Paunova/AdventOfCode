const getInputArgs = (input) => {
    // input example: 1-3 a: abcde
    const inputs = input.split(' ');
    const passwordLimits = inputs[0].split('-'); // [1, 3]
    const letter = inputs[1].split('')[0]; // a
    const password = inputs[2]; // abcde
    const startLimit = Number(passwordLimits[0]);
    const endLimit = Number(passwordLimits[1]);

    return {
        startLimit,
        endLimit,
        letter,
        password
    };
};

module.exports = {getInputArgs};