const MapConfigRepository = require('../repositories/MapConfigRepository');

class MapConfig {
  constructor(session) {
    this._mapConfigRepository = new MapConfigRepository(session);
  }

  static MapConfig({ id, organization_id, theme }) {
    return Object.freeze({ id, organization_id, theme });
  }

  async getMapConfigs(filter, limitOptions) {
    return this._mapConfigRepository.getByFilter(filter, limitOptions);
  }

  async createMapConfigs(mapConfig) {
    return this._mapConfigRepository.create(mapConfig);
  }
}

module.exports = MapConfig;
