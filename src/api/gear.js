const gear = require('express').Router();
const status = require('../utils/statusMessages');
const {
    addGear,
    getGear,
    removeGearSet,
    getCharacters,
    getCharacterGear
} = require('../data/gear');
const { validator } = require('../utils/validator');
const { postGearBody } = require('./validation/gear');

gear.post('/', validator.body(postGearBody), async (req, res) => {
  const { body: { character, gear } } = req;

  const addedGear = await addGear(character, gear);

  return status.created(res, { ...addedGear });
});

gear.get('/', async (req, res) => {
  const gear = await getGear();

  return status.success(res, { data: gear.items });
});

gear.delete('/:gearSetId', async (req, res) => {
  const { params: { gearSetId } } = req;

  const removedGearSet = await removeGearSet(gearSetId);

  return status.success(res, { ...removedGearSet });
});

gear.get('/characters', async (req, res) => {
  const characters = await getCharacters();

  return status.success(res, { characters });
});

gear.get('/characters/:character', async (req, res) => {
  const { params: { character } } = req;

  const gearSets = await getCharacterGear(character);
  const characterGear = gearSets.find(gearSet => {
    return gearSet.gear && gearSet.gear.length > 0;
  });

  return status.success(res, { ...characterGear });
});

module.exports = gear;
