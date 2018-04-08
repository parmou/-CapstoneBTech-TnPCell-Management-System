const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    createdOn: String,
    fields: String
})

const Event = mongoose.model('event', eventSchema);
module.exports = Event;

