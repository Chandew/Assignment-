const Restaurants = require('../Models/Restaurants.json');

exports.getRestaurantsByCity = (req,res) => {
    const input = req.params.city;
    const filteredRes = Restaurants.filter(item => item.city == input);
    res.status(200).json(filteredRes);
}