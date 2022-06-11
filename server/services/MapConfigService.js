const Session = require('../infra/database/Session');
const MapConfig = require('../models/MapConfig');

class MapConfigService {
  constructor() {
    this._session = new Session();
    this._mapConfig = new MapConfig(this._session);
  }

  async getMapConfigs(filter, limitOptions) {
    return this._mapConfig.getMapConfigs(filter, limitOptions);
  }

  async createMapConfigs(mapConfig) {
    return this._mapConfig.createMapConfigs(mapConfig);
  }
}

module.exports = MapConfigService;
