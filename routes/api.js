const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const { sendPlants } = require('../controllers/plantsController');
const { sendGardens } = require('../controllers/gardensController');

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

apiRouter.route('/plants/:garden_uuid').get(sendPlants);

apiRouter.route('/gardens').get(sendGardens);

apiRouter.route('/equipment/:garden_uuid').get();

module.exports = apiRouter;
