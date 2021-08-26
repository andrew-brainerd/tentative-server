const data = require('../utils/data');
const log = require('../utils/log');
const { GEAR_COLLECTION } = require('../constants/collections');

const addGear = async (character, gear) => {
  log.info('Adding gear for ', character);
  return await data.insertOne(GEAR_COLLECTION, { character, gear });
};

const getCharacters = async () => {
  return await data.getDistinct(GEAR_COLLECTION, 'name');
};

const getGear = async character => {
  return await data.getAllByProperty(GEAR_COLLECTION, 'name', character);
};

module.exports = {
  addGear,
  getCharacters,
  getGear
};
