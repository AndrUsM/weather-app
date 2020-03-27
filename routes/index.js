const express = require('express');
const router = express.Router();
const title = "Weather-app";
const weather = require("weather-js");
const Store = require("../models/store");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: title,
    weather: null,
    error: null,
    button: "Get Weather"
  });
});

router.post('/', function (req, res) {
  let city = req.body.city;

  weather.find({ search: city, degreeType: 'C' }, function (err, result) {
      const formated_object = {
          location: result[0].location,
          current: result[0].current,
          forecast: result[0].forecast
      }
      Store.insertMany(formated_object, (err, doc) => {
        if(err) console.log(err);
        else console.log("Date succesfully saved in history");
      })
      res.render('index', {
          title: title,
          weather: JSON.stringify(formated_object),
          error: null,
          button: "Show Weather"
      })
  })
})

module.exports = router;
