const { Pool } = require('pg');

const PG_URI = 'postgres://rbsbazja:4WVXBmU9IaysTnXRzVuCPhGu480JSJ3h@queenie.db.elephantsql.com/rbsbazja';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};