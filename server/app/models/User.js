const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    rollno: {type : String, unique : true},
    password: String,
    branch: String,
    year: Number,
    isCoordinator: Boolean,
    _training: {type : Schema.Types.ObjectId, ref: 'trainingDetails'} 
   });

const User = mongoose.model('user', userSchema);
module.exports = User;