const Joi = require('joi');

const organisationGetSchema = Joi.object({
  id: Joi.string().required(),
});

module.exports = { organisationGetSchema };
