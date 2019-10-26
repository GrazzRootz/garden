const connection = require('../db/connection');

const fetchGardens = () => {
  return connection.select('*').from('gardens');
};

const postGarden = req => {
  const { garden_name, soil_ph, guerilla } = req;

  const gardenObj = {
    garden_name,
    soil_ph,
    guerilla,
  };

  return connection
    .insert(gardenObj)
    .into('gardens')
    .returning('*');
};

module.exports = { postGarden, fetchGardens };
