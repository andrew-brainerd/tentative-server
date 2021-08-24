const Joi = require('joi');

const postGearBody = Joi.object({
  name: Joi.string().required(),
  gear: Joi.array().required()
});

module.exports = {
  postGearBody
};
