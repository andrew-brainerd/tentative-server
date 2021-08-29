const data = require('../utils/data');
const { GUILD_COLLECTION } = require('../constants/collections');

const updateGuild = async guild => {
  return await data.insertOne(GUILD_COLLECTION, { guild });
};

const getGuild = async () => {
  return await data.getSome(GUILD_COLLECTION);
};

module.exports = {
  updateGuild,
  getGuild
};
