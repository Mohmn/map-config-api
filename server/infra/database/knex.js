const expect = require('expect-runtime');
const knex = require('knex');

const connection = process.env.DATABASE_URL;
expect(connection).to.match(/^postgresql:\//);

const knexConfig = {
  client: 'pg',
  debug: process.env.NODE_LOG_LEVEL === 'debug',
  connection,
  searchPath: 'webmap',
  pool: { min: 0, max: 100 },
};

module.exports = knex(knexConfig);
