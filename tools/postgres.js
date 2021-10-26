const {Pool} = require('pg');

const pool = new Pool({
    host: 'postgresql-55745-0.cloudclusters.net',
    user: 'beds10',
    password: '12345678',
    database: 'students',
    port: '19767'

});

module.exports = pool;