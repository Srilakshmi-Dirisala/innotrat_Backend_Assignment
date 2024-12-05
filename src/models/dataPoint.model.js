const mongoose = require('mongoose');

const DataPointSchema = new mongoose.Schema({
    deviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Device', required: true },
    temperature: { type: Number, required: true },
    heartRate: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
});

const DataPoint = mongoose.model('DataPoint', DataPointSchema);
module.exports = DataPoint;
