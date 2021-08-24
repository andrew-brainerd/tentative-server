const Joi = require('joi');

const postPlayerBody = Joi.object({
  toonName: Joi.string().required(),
  toonRace: Joi.string().required(),
  toonClass: Joi.string().required(),
  toonSpec: Joi.string().required()
});

module.exports = {
  postPlayerBody
};
