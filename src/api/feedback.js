const feedback = require('express').Router();
const feedbackData = require('../data/feedback');
const status = require('../utils/statusMessages');
const { validator } = require('../utils/validator');
const { postFeedbackBody } = require('./validation/feedback');

feedback.post('/', validator.body(postFeedbackBody), async (req, res) => {
    const { body: { name, suggestion } } = req;

    const addedFeedback = await feedbackData.addFeedback(name, suggestion);

    return status.created(res, { ...addedFeedback });
  }
);

feedback.get('/', async (req, res) => {
  const suggestions = await feedbackData.getSuggestions();

  return status.success(res, { data: [...suggestions.items] });
});

module.exports = feedback;
