import Moment from 'moment';

const isEmpty = (object) => {
  if (object === null || object === undefined || object === '') {
    return true;
  }
  return false;
};

const parseDate = (str) => {
  const date = new Date(str);

  if (date.getTime()) {
    return Moment(date);
  }

  try {
    return Moment(str, 'DD/MM/YYYY');
  } catch (e) {
    return undefined;
  }
};

export {
  isEmpty,
  parseDate,
};
