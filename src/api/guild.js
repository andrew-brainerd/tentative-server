const guild = require('express').Router();
const status = require('../utils/statusMessages');
const { sortList } = require('../utils/sort');
const { updateGuild, getGuild } = require('../data/guild');
const { validator } = require('../utils/validator');
const { postGuildBody } = require('./validation/guild');

guild.post('/', validator.body(postGuildBody), async (req, res) => {
  const { body: { guild } } = req;

  await updateGuild(guild);

  return status.created(res, { message: 'Guild updated' });
});

guild.get('/', async (req, res) => {
  const { query: { sort, direction } } = req;

  const guildData = await getGuild();
  const memberList = guildData.items[0].guild.filter(member => member.name);
  const sortedMembers = sortList(memberList, sort, direction);

  return status.created(res, { guild: sortedMembers });
});

module.exports = guild;
