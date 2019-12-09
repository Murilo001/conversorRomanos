const moment = require('moment');

const isEmpty = (object) => {
    if (object == null || object == undefined || object == '') {
        return true;
    }
    return false;
};

const parseDate = (str) => {
    const date = new Date(str);

    if (date.getTime()) {
        return moment(date);
    }

    try {
        return moment(str, 'DD/MM/YYYY');
    } catch (e) {
        return undefined;
    }
};


module.exports = {
    isEmpty: isEmpty,
    parseDate: parseDate,
};
