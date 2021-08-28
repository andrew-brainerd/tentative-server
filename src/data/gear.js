const data = require('../utils/data');
const { GEAR_COLLECTION } = require('../constants/collections');

const addGear = async (character, gear) => {
  return await data.insertOne(GEAR_COLLECTION, { character, gear });
};

const getGear = async () => {
  return await data.getSome(GEAR_COLLECTION);
};

const removeGearSet = async gearSetId => {
  return await data.deleteOne(GEAR_COLLECTION, gearSetId);
};

const getCharacters = async () => {
  return await data.getDistinct(GEAR_COLLECTION, 'character.characterName');
};

const getCharacterGear = async character => {
  return await data.getAllByProperty(GEAR_COLLECTION, 'character.characterName', character);
};

module.exports = {
  addGear,
  getGear,
  removeGearSet,
  getCharacters,
  getCharacterGear
};
