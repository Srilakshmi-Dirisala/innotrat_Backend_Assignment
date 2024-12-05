const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    deviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Device', required: true },
    event: { type: String, enum: ['start', 'stop'], required: true },
    timestamp: { type: Date, default: Date.now },
});

const Event = mongoose.model('Event', EventSchema);
module.exports = Event;
