const { fetchPlantsByGarden } = require('../models/plantsModel');

const sendPlants = (req, res, next) => {
  fetchPlantsByGarden(req.params).then(plants => {
    res.status(200).send({ plants });
  });
};

module.exports = { sendPlants };
