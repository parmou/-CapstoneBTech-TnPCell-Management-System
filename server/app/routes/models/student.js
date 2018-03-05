const mongoose = require('mongoose');
const Schema = mongoose.Schema

const studentSchema = new Schema({
    name: String,
    age: Number
});

const Student = mongoose.model('student', studentSchema);
module.exports = Student;