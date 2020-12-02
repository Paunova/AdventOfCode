const getLocalDate = () => {
    const dateNow = new Date();
    const timestampNow = dateNow.getTime(); // ms
    const timezoneOffset = dateNow.getTimezoneOffset(); // min
    const localTimestamp = timestampNow + (timezoneOffset * 60);
    return new Date(localTimestamp);
}

const getCurrentDay = () => getLocalDate().getDate();

const getCurrentYear = () => getLocalDate().getFullYear();

module.exports = {getCurrentDay, getCurrentYear};