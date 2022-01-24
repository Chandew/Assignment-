const Capitals = require('../Models/Capitals.json')

exports.getCapitals = (req,res) => {
    res.status(200).json(capitals);
}