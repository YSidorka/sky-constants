const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;

const MAIN_DIR = process?.env.INIT_CWD || process?.env.PWD;

const DEFAULT_DELIMITER = '###';
const DEFAULT_REGEX_DELIMITER = '###';

const DATA_TYPES = {
  TYPE_COMPONENT: 'component',
  TYPE_DOMAIN: 'domain'
};
Object.freeze(DATA_TYPES);

const RESERVED_URLS = {
  PAGE_API: '/api',
  MEMORY_ROUTE: '/__memory'
};
Object.freeze(RESERVED_URLS);

const STORE_TYPES = {
  FS_STORE: 'fs',
  MONGODB_STORE: 'mongodb'
};
Object.freeze(STORE_TYPES);

function isValidType(type) {
  if (!type) return false;
  return Object.values(DATA_TYPES).includes(type);
}

module.exports = {
  SECOND,
  MINUTE,
  HOUR,
  DAY,
  WEEK,

  $DD: DEFAULT_DELIMITER,
  $REGDD: DEFAULT_REGEX_DELIMITER,

  DATA_TYPES,
  ...DATA_TYPES,
  isValidType,

  ...RESERVED_URLS,
  
  ...STORE_TYPES,

  MAIN_DIR
};
