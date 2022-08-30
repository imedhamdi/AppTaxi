const express = require('express');
const fetch = require('node-fetch');
var cors = require('cors');
const app = express();
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

let locationDep = '140 William Street, Perth Australie-Occidentale, Australie';
let locationArr = '1400 Ivar Avenue, Los Angeles, Californie, États-Unis';
const requestOptions = {
  method: 'GET',
  params: {
    origins: locationDep,
    destinations: locationArr,
    units: 'metric',
    key: 'AIzaSyCXGwyGwH8gZ8uE5524ZnX1vVcazbbIrKo',

  },
}
fetch('https://maps.googleapis.com/maps/api/distancematrix/json',requestOptions)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })

module.exports = app;