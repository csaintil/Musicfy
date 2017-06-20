// Setup for pg promise
const pgp = require('pg-promise')();

// configuration object
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'beer_list',
    user: 'timothygardner'
};

const db = pgp(cn);

module.exports = db;