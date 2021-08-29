const data = require('../utils/data');
const log = require('../utils/log');
const { GUILD_COLLECTION } = require('../constants/collections');

const updateGuild = async guild => {
  log.info('Updating guild info');
  return await data.insertOne(GUILD_COLLECTION, { guild });
};

const getGuild = async () => {
  return await data.getSome(GUILD_COLLECTION);
};

module.exports = {
  updateGuild,
  getGuild
};
