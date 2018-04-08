const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coordinatorSchema = new Schema({
    eventList: [String]
})

const Coordinator = mongoose.model('coordinator',coordinatorSchema);
module.exports = Coordinator;