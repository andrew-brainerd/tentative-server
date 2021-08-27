const recruitment = require('express').Router();
const recruitmentData = require('../data/recruitment');
const status = require('../utils/statusMessages');
const { validator } = require('../utils/validator');
const { postPlayerBody } = require('./validation/recruitment');

recruitment.post('/', validator.body(postPlayerBody), async (req, res) => {
  const { body: { toonName, toonRace, toonClass, toonSpec } } = req;

  const addedPlayer = await recruitmentData.addPlayer(toonName, toonRace, toonClass, toonSpec);

  return status.created(res, { ...addedPlayer });
});

recruitment.get('/', async (req, res) => {
  const applications = await recruitmentData.getApplications();

  return status.success(res, { data: [...applications.items] });
});

module.exports = recruitment;
