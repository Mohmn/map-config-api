const MapConfigRepository = require('../repositories/MapConfigRepository');

class MapConfig {
  constructor(session) {
    this._mapConfigRepository = new MapConfigRepository(session);
  }

  static MapConfig({ id, organization_id, theme, created_at, updated_at }) {
    return Object.freeze({
      id,
      organization_id,
      theme,
      created_at,
      updated_at,
    });
  }

  async getMapConfigs(filter, limitOptions) {
    const mapConfigs = await this._mapConfigRepository.getByFilter(
      filter,
      limitOptions,
    );
    return mapConfigs.map((m) => this.constructor.MapConfig(m));
  }

  async createMapConfigs(mapConfig) {
    return this._mapConfigRepository.create(mapConfig);
  }
}

module.exports = MapConfig;
