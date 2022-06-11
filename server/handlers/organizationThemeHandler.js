const MapConfigService = require('../services/MapConfigService');
const HttpError = require('../utils/HttpError');

const organizationThemeGetHandler = async (req, res) => {
  const { organization_id } = req.params;
  const mapConfigService = new MapConfigService();
  const result = await mapConfigService.getMapConfigs({ organization_id });

  if (result.length === 0) {
    throw new HttpError('Not Found');
  }

  res.status(200).json(result[0]);
};

const organizationThemePostHandler = async (req, res) => {
  const { organization_id } = req.params;
  const { theme } = req.body;
  const mapConfigService = new MapConfigService();
  await mapConfigService.createMapConfigs({ theme, organization_id });

  res.status(200).json({ ok: true });
};

module.exports = {
  organizationThemeGetHandler,
  organizationThemePostHandler,
};
