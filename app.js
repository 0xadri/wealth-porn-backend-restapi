const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const ukDataRoutes = require('./routes/ukData.js');

const app = express();

app.use(bodyParser.json()); // application/json

app.use('/img', express.static(path.join(__dirname, 'img')))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization'
    );
    next();
});

app.use('/uk-data', ukDataRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message || 'Fetching error ¯\_(ツ)_/¯';
  res.status(status).json({message: message})
});

mongoose
  .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.nqhevvt.mongodb.net/uk_wealth_gap?retryWrites=true&w=majority&appName=Cluster0`)
  .then(result => {
    app.listen(8080);
  })
  .catch(err => console.log(err));
