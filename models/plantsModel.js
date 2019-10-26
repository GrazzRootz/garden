const connection = require('../db/connection');

const fetchPlantsByGarden = query => {
  const { garden } = query;

  return connection
    .select('*')
    .from('plants')
    .modify(plantQuery => {
      plantQuery.where('gardens.garden_name', '=', garden);
    });
};

module.exports = { fetchPlantsByGarden };
