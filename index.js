const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;

const MAIN_DIR = process?.env.INIT_CWD || process?.env.PWD;

const STORE_TYPES = {
  FS_STORE: 'fs',
  MONGODB_STORE: 'mongodb'
};
Object.freeze(STORE_TYPES);

module.exports = {
  SECOND,
  MINUTE,
  HOUR,
  DAY,
  WEEK,

  ...STORE_TYPES,

  MAIN_DIR
};
