const connection = require('../db/connection');

const fetchGardens = query => {
  return connection.select('*').from('gardens');
};

module.exports = { fetchGardens };
