const gear = require('express').Router();
const gearData = require('../data/gear');
const status = require('../utils/statusMessages');
const { validator } = require('../utils/validator');
const { postGearBody } = require('./validation/gear');

gear.post('/', validator.body(postGearBody), async (req, res) => {
    const { body: { name, gear } } = req;

    const addedGear = await gearData.addGear(name, gear);

    return status.created(res, { ...addedGear });
  }
);

module.exports = gear;
