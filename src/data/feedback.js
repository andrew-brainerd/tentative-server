const data = require('../utils/data');
const log = require('../utils/log');
const { FEEDBACK_COLLECTION } = require('../constants/collections');

const addFeedback = async (name, suggestion) => {
  log.cool(`Adding suggestion from ${name} to feedback`);

  const addedGear = await data.insertOne(FEEDBACK_COLLECTION, { name, suggestion });

  return addedGear;
};

const getSuggestions = async () => {
  return await data.getSome(FEEDBACK_COLLECTION);
};

module.exports = {
  addFeedback,
  getSuggestions
};
