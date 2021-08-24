const Joi = require('joi');

const postFeedbackBody = Joi.object({
  name: Joi.string().required(),
  suggestion: Joi.string().required()
});

module.exports = {
  postFeedbackBody
};
