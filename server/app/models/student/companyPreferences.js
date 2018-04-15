const mongoose = require('mongoose');
const schema = mongoose.Schema;

const companyPreferenceSchema = new schema({
    preference1: String,
    preference2: String,
    preference3: String
})

const CompanyPreference = mongoose.model('companyPreferences', companyPreferenceSchema);
module.exports = CompanyPreference;