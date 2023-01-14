const OrganisationService = require('../../services/OrganisationService');
const HttpError = require('../../utils/HttpError');
const { organisationGetSchema } = require('./schemas');

const organisationGetHandler = async (req, res) => {
  await organisationGetSchema.validateAsync(req.params, { abortEarly: false });
  const organisationService = new OrganisationService();
  const org = await organisationService.getOrganisationById(req.params.id);

  if (!org) {
    throw new HttpError(404, 'Not Found');
  }

  res.status(200).json(org);
};

module.exports = {
  organisationGetHandler,
};
