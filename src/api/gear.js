const gear = require('express').Router();
const gearData = require('../data/gear');
const status = require('../utils/statusMessages');
const { validator } = require('../utils/validator');
const { postGearBody } = require('./validation/gear');

gear.post('/', validator.body(postGearBody), async (req, res) => {
  const { body: { character, gear } } = req;

  const addedGear = await gearData.addGear(character, gear);

  return status.created(res, { ...addedGear });
});

gear.get('/characters', async (req, res) => {
  const characters = await gearData.getCharacters();

  return status.success(res, { characters });
});

gear.get('/characters/:character', async (req, res) => {
  const { params: { character } } = req;

  const gearSets = await gearData.getGear(character);
  const characterGear = gearSets.find(gearSet =>
    gearSet.gear && gearSet.gear.length > 0
  );

  return status.success(res, { ...characterGear });
});

module.exports = gear;
