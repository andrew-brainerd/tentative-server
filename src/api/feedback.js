const feedback = require('express').Router();
const feedbackData = require('../data/gear');
const status = require('../utils/statusMessages');
const { validator } = require('../utils/validator');
const { postFeedbackBody } = require('./validation/feedback');

feedback.post('/', validator.body(postFeedbackBody), async (req, res) => {
    const { body: { name, gear } } = req;

    const addedFeedback = await feedbackData.addGear(name, gear);

    return status.created(res, { ...addedFeedback });
  }
);

module.exports = feedback;
