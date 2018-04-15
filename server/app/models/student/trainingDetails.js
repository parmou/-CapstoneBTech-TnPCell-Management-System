const mongoose = require('mongoose');
const schema = mongoose.Schema;

const trainingDetailsSchema = new schema({
    companyPreference: [String],
    approvalStatus: [String],
    companyResponse: [String]
})