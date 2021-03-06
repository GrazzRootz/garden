const express = require('express');
const apiRouter = require('./routes/api');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', apiRouter);

module.exports = app;
