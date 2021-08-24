const data = require('../utils/data');
const log = require('../utils/log');
const { RECRUITMENT_COLLECTION } = require('../constants/collections');

const addPlayer = async (toonName, toonRace, toonClass, toonSpec) => {
  log.cool(`Adding ${toonName} to recruitment list`);

  const addedPlayer = await data.insertOne(RECRUITMENT_COLLECTION, {
    name: toonName,
    race: toonRace,
    class: toonClass,
    spec: toonSpec
  });

  return addedPlayer;
};

module.exports = {
  addPlayer
};
