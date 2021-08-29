const Joi = require('joi');

const postGuildBody = Joi.object({
  guild: Joi.array().required()
});

module.exports = {
  postGuildBody
};
