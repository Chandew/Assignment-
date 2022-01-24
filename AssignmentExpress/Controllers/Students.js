const Students = require('../Models/Students.json');
exports.getStudents = (req,res) => {
    res.status(200).json(students);
};