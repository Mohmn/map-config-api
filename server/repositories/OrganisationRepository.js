const BaseRepository = require('./BaseRepository');

class OrganisationRepository extends BaseRepository {
  constructor(session) {
    super('public.entity', session);
  }
}

module.exports = OrganisationRepository;
