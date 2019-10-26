const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const { sendPlants, addPlant } = require('../controllers/plantsController');
const { sendGardens, addGarden } = require('../controllers/gardensController');
const { sendEquipment } = require('../controllers/equipmentController');

const authConfig = {
  domain: 'dev-112l54tu.eu.auth0.com',
  clientId: '2d2afeuMTHOTbrEz6rfGIBo1FMLKMhzl',
  audience: 'grazzrootzgarden',
};

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ['RS256'],
});

const apiRouter = require('express').Router();

apiRouter.route('/').get(checkJwt, (req, res) => {
  res.send({
    msg: 'Your Access Token was successfully validated!',
  });
});

apiRouter
  .route('/plants/:garden_id')
  .get(sendPlants)
  .post(addPlant);

apiRouter
  .route('/gardens')
  .get(sendGardens)
  .post(addGarden);

apiRouter.route('/equipment/:garden_id').get(sendEquipment);

module.exports = apiRouter;
