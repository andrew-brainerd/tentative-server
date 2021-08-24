const Joi = require('joi');

const getItemParams = Joi.object({
  itemId: Joi.string().required()
});

module.exports = {
  getItemParams
};
