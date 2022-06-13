const BaseRepository = require('./BaseRepository');

class MapConfigRepository extends BaseRepository {
  constructor(session) {
    super('map_config', session);
    this._tableName = 'map_config';
    this._knex = session.getDB();
  }

  async create(object) {
    return this._knex('tableName')
      .insert(object)
      .onConflict('organization_id')
      .merge({
        theme: object.theme,
        updated_at: new Date().toISOString(),
      });
  }
}

module.exports = MapConfigRepository;
