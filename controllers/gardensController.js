const { fetchGardens } = require('../models/gardensModel');

const sendGardens = (req, res, next) => {
  console.log(req);
  fetchGardens(req.params).then(gardens => {
    res.status(200).send({ gardens });
  });
};

module.exports = { sendGardens };
