const Joi = require('joi');

const postGearBody = Joi.object({
  character: Joi.object({
    characterName: Joi.string(),
    characterClass: Joi.string()
  }).required(),
  gear: Joi.array().required()
});

module.exports = {
  postGearBody
};
