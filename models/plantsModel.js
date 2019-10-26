const connection = require('../db/connection');

const fetchPlantsByGarden = query => {
  const { garden_id } = query;

  return connection
    .select('*')
    .from('plants')
    .where('plants.garden', '=', garden_id);
};

const plantInGarden = req => {
  const { plant_name, quantity, garden } = req;

  const plantObj = { plant_name, quantity, garden };

  return connection
    .insert(plantObj)
    .into('plants')
    .returning('*');
};

module.exports = { fetchPlantsByGarden, plantInGarden };
