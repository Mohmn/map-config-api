const ConfigService = require('../../services/ConfigService');
const HttpError = require('../../utils/HttpError');
const { configPostSchema, configPatchSchema } = require('./schemas');

const configGetHandler = async (req, res) => {
  const configService = new ConfigService();
  const result = await configService.getConfigs();

  if (result.length === 0) {
    throw new HttpError(404, 'Not Found');
  }

  res.status(200).json(result);
};

const configPostHandler = async (req, res) => {
  await configPostSchema.validateAsync(req.body, { abortEarly: false });
  const configService = new ConfigService();
  await configService.createConfigs(req.body);

  res.status(200).json({ ok: true });
};

const configPatchHandler = async (req, res) => {
  await configPatchSchema.validateAsync(req.body, { abortEarly: false });
  const configService = new ConfigService();
  await configService.patchConfigs(req.body);

  res.status(200).json({ ok: true });
};

module.exports = {
  configGetHandler,
  configPostHandler,
  configPatchHandler,
};
