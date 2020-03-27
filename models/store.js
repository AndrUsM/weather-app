const mongoose = require('mongoose');

let HistorySchema = new mongoose.Schema({
    location: {
        type: Object
    },
    current: {
        type: Object
    },
    forecast: {
        type: Array
    }
})

const History = mongoose.model('History', HistorySchema);
module.exports = History;