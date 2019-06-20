const mongoose = require('mongoose');

const temperSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    startTime: {type: Date, required: true },
    endTime: {type: Date, required: true },
    value: {type: Number, required: true }
});

module.exports = mongoose.model('Temperature', temperSchema);
