const guild = require('express').Router();
const status = require('../utils/statusMessages');
const { updateGuild, getGuild } = require('../data/guild');
const { validator } = require('../utils/validator');
const { postGuildBody } = require('./validation/guild');

guild.post('/', validator.body(postGuildBody), async (req, res) => {
  const { body: { guild } } = req;

  await updateGuild(guild);

  return status.created(res, { message: 'Guild updated' });
});

guild.get('/', async (req, res) => {
  const guildData = await getGuild();

  return status.created(res, { guild: guildData.items[0].guild });
});

module.exports = guild;
