const Session = require('../infra/database/Session');
const Organisation = require('../models/Organisation');

class OrganisationService {
  constructor() {
    this._session = new Session();
    this._organisation = new Organisation(this._session);
  }

  async getOrganisationById(id) {
    return this._organisation.getOrganisationById(id);
  }

}

module.exports = OrganisationService;
