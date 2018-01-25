// Setup for pg promise
const pgp = require('pg-promise')();

// configuration object
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'auth_beer_list_lab'
};

const db = pgp(cn);

module.exports = db;