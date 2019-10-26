const { fetchGardens, postGarden } = require('../models/gardensModel');

const sendGardens = (req, res, next) => {
  fetchGardens(req.params).then(gardens => {
    res.status(200).send({ gardens });
  });
};

const addGarden = (req, res, next) => {
  postGarden(req.body).then(([garden]) => res.status(200).send({ garden }));
};

module.exports = { sendGardens, addGarden };
