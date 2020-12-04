const {input} = require('./input');
const {validateFields, isRequiredField} = require('./validate');

const allFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']; // cid ignored

const isPassportValid = (fields, shouldValidate) => {
    let validFields = [];

    for (const field of fields) {
        const [fieldKey, fieldValue] = field.split(':');

        if (isRequiredField(fieldKey)) {
            !shouldValidate && validFields.push(fieldKey);
            const isValidField = validateFields(fieldValue)[fieldKey];
            isValidField && validFields.push(fieldKey);
        }
    }

    const hasInvalidFields = allFields.some(x => validFields.indexOf(x) === -1);

    return !hasInvalidFields;
}

// get total valid passports that contain all the required fields
const partOne = (shouldValidate) => {
    const passports = input.split('\n\n');
    let validPassports = 0;

    for(let passport of passports) {
        passport = passport.replace(/\n/g, ' ');
        const passportFields = passport.split(' ');

        if (isPassportValid(passportFields, shouldValidate)) {
            validPassports += 1;
        }
    }
    return validPassports;
};

module.exports = {partOne};