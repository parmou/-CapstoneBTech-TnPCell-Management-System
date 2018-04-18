const mongoose = require('mongoose');
const schema = mongoose.Schema;

const trainingDetailsSchema = new schema({
    companyPreference: [String],
    approvalStatus: String,
    companyResponse: [String],
    
})

const TrainingDetails = mongoose.model('trainingDetails', trainingDetailsSchema);
module.exports = TrainingDetails;