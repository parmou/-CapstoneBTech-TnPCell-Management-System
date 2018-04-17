const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personalDetailsSchema = new Schema({
    year : String,
    branch : String,
    _creator : {type : Schema.Types.ObjectId, ref : 'user'},
    _training : {type : Schema.Types.ObjectId, ref : 'trainingDetails'} 
})

const PersonalDetails = mongoose.model('personalDetails', personalDetailsSchema);
module.exports = PersonalDetails;