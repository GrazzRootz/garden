const { fetchPlantsByGarden, plantInGarden } = require('../models/plantsModel');

const sendPlants = (req, res, next) => {
  fetchPlantsByGarden(req.params).then(plants => {
    res.status(200).send({ plants });
  });
};

const addPlant = (req, res, next) => {
  plantInGarden(req.body).then(([plant]) => res.status(201).send(plant));
};

module.exports = { sendPlants, addPlant };
