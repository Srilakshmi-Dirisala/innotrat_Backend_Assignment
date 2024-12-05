const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
    name: String,
    status: { type: String, enum: ['running', 'stopped'], default: 'stopped' },
    createdAt: { type: Date, default: Date.now },
});

const Device = mongoose.model('Device', DeviceSchema);
module.exports = Device;
