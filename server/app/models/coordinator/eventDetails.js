const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fieldSchema = new Schema({
    type: String,
    value: String
})

const eventSchema = new Schema({
    name: String,
    year: String,
    branch: String,
    fields: [fieldSchema]
})

const Event = mongoose.model('event', eventSchema);
module.exports = Event;

