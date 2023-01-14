const OrganisationRepository = require('../repositories/OrganisationRepository');

class Organisation {
  constructor(session) {
    this._organisationRepository = new OrganisationRepository(session);
  }

  static Organisation(org) {
    const modifiedOrg = {...org };
    delete modifiedOrg.password;
    return Object.freeze(modifiedOrg);
  }

  async getOrganisationById(id) {
    const organisation = await this._organisationRepository.getById(id);
    return this.constructor.Organisation(organisation);
  }

}

module.exports = Organisation;
