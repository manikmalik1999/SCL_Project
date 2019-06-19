const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    startTime: {type: number, required: true},
    endTime: {type:date, required: true},
    value: {type: Number, required: true}
});

module.exports = mongoose.model('Product', productSchema);
