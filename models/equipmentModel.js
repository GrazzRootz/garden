const connection = require('../db/connection');

const fetchEquipmentByGarden = query => {
  const { garden_id } = query;
  return connection
    .select('*')
    .from('equipment')
    .where('equipment.garden', '=', garden_id);
};

const postEquipmentInGarden = req => {
  const { equipment_name, quantity, garden } = req;

  const equipmentObj = { equipment_name, quantity, garden };

  return connection
    .insert(equipmentObj)
    .into('equipment')
    .returning('*');
};

module.exports = { fetchEquipmentByGarden, postEquipmentInGarden };
