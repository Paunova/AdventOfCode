
const {input} = require('./input');

const partTwo = () => {
    const groups = input.split('\n\n');

    let totalAnswers = 0;

    for(let group of groups) {
        const participants = group.split('\n');
        const answersCountMap = new Map();

        for (const participant of participants) {
            const answers = participant.split('');

            answers.map(answer => {
                if (!answersCountMap.has(answer)) {
                    return answersCountMap.set(answer, 1);
                }
                const newValue = answersCountMap.get(answer) + 1;
                return answersCountMap.set(answer, newValue);
            });
        }

        const answersCount = Array.from(answersCountMap.values());

        for (const ac of answersCount) {
            if (ac === participants.length) {
                totalAnswers += 1;
            }
        }
    }

    return totalAnswers;
}

module.exports = {partTwo};