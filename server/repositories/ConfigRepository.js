const BaseRepository = require('./BaseRepository');

class ConfigRepository extends BaseRepository {
  constructor(session) {
    super('config', session);
  }
}

module.exports = ConfigRepository;
