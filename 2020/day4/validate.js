// byr (Birth Year) - four digits; at least 1920 and at most 2002.
// iyr (Issue Year) - four digits; at least 2010 and at most 2020.
// eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
// hgt (Height) - a number followed by either cm or in:
//     If cm, the number must be at least 150 and at most 193.
//     If in, the number must be at least 59 and at most 76.
// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
// ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
// pid (Passport ID) - a nine-digit number, including leading zeroes.
// cid (Country ID) - OPTIONAL field

const isNumberInRange = (value, min, max) => Number(value) >= min && Number(value) <= max;

const isRequiredField = (field) => field !== 'cid';

const validateHeight = (value) => {
    const height = Number(value.substr(0, value.length - 2));
    const unit = value.substr(value.length - 2);

    const isValidHeight = {
        'cm': height >= 150 && height <= 193,
        'in': height >= 59 && height <= 76
    };

    return isValidHeight[unit];
};

const eyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

const validateFields = (value) => {
    return {
        byr: isNumberInRange(value, 1920, 2002),
        iyr: isNumberInRange(value, 2010, 2020),
        eyr: isNumberInRange(value, 2020, 2030),
        hgt: validateHeight(value),
        hcl: new RegExp("^#([a-fA-F0-9]{6})$").test(value),
        ecl: eyeColors.indexOf(value) !== -1,
        pid: new RegExp('^[0-9]{9}$').test(value)
    };
};

module.exports = {isRequiredField, validateFields};