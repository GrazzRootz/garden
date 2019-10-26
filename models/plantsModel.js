const connection = require('../db/connection');

const fetchPlantsByGarden = query => {
  const { garden_id } = query;

  return connection
    .select('*')
    .from('plants')
    .where('plants.garden', '=', garden_id);
};

module.exports = { fetchPlantsByGarden };
