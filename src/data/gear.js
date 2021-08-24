const data = require('../utils/data');
// const log = require('../utils/log');
const { GEAR_COLLECTION } = require('../constants/collections');

const addGear = async (name, gear) => {
  // log.cool(`Adding ${toonName} to recruitment list`);

  const addedGear = await data.insertOne(GEAR_COLLECTION, { name, gear });

  return addedGear;
};

module.exports = {
  addGear
};