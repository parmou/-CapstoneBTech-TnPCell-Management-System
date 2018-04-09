const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    rollno: String,
    password: String,
    isCoordinator: Boolean
});

const User = mongoose.model('user', userSchema);
module.exports = User;