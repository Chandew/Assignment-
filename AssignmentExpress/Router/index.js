const express = require('express');

const route = express.Router();

const studentsController = require('../Controllers/Students');

const capitalController = require('../Controllers/Capitals');

const restaurantController = require('../Controllers/Restaurants');



route.get('/students',studentsController.getStudents);

route.get('/capitals',capitalController.getCapitals);

// app.use('/restaurants',(req,res) => {
//     res.status(200).json(restaurants);
// });

route.get('/restaurants/:city',restaurantController.getRestaurantsByCity);

module.exports = route;
