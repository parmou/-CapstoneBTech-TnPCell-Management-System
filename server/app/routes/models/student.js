const mongoose = require('mongoose');
const Schema = mongoose.Schema

const studentSchema = new Schema({
    name: String,
    age: Number,
    rollno: String,
    contact: String,
    email: String,
    fathersName: String,
    mothersName: String,
    address: String,
    dob: Date,
});

const Student = mongoose.model('student', studentSchema);
module.exports = Student;