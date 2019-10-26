const { fetchEquipmentByGarden } = require('../models/equipmentModel');

const sendEquipment = (req, res, next) => {
  fetchEquipmentByGarden(req.params).then(equipment => {
    res.status(200).send({ equipment });
  });
};

const addEquipment = (req, res, next) => {
  plantInGarden(req.body).then(([equipment]) => res.status(201).send(plant));
};

module.exports = { sendEquipment, addEquipment };
