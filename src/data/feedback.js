const data = require('../utils/data');
const log = require('../utils/log');
const { FEEDBACK_COLLECTION } = require('../constants/collections');

const addFeedback = async (name, suggestion) => {
  log.cool(`Adding suggestion from ${name} to feedback`);

  const addedGear = await data.insertOne(GEAR_COLLECTION, { name, suggestion });

  return addedGear;
};

module.exports = {
  addFeedback
};
