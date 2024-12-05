const Device = require('../models/device.model');
const Event = require('../models/event.model');
const DataPoint = require('../models/dataPoint.model');

// Store intervals for running devices
let intervals = {};

// Function to generate random data points for a running device
const generateData = async (deviceId) => {
    const temperature = Math.random() * (35 - 25) + 25; // Temperature between 25 and 35
    const heartRate = Math.floor(Math.random() * (100 - 60) + 60); // Heart rate between 60 and 100

    const dataPoint = new DataPoint({
        deviceId,
        temperature,
        heartRate,
    });

    await dataPoint.save();
};

// Service to create a new device
const createDevice = async (name) => {
    const device = new Device({ name });
    return await device.save();
};

// Service to start a device
const startDevice = async (id) => {
    const device = await Device.findById(id);
    if (!device) throw new Error('Device not found');
    if (device.status === 'running') throw new Error('Device is already running');

    device.status = 'running';
    await device.save();

    // Log the start event
    await new Event({ deviceId: id, event: 'start' }).save();

    // Start generating data points every 5 seconds
    if (!intervals[id]) {
        intervals[id] = setInterval(() => generateData(id), 5000);
    }

    return device;
};

// Service to stop a device
const stopDevice = async (id) => {
    const device = await Device.findById(id);
    if (!device) throw new Error('Device not found');
    if (device.status === 'stopped') throw new Error('Device is already stopped');

    device.status = 'stopped';
    await device.save();

    // Log the stop event
    await new Event({ deviceId: id, event: 'stop' }).save();

    // Stop generating data by clearing the interval
    if (intervals[id]) {
        clearInterval(intervals[id]);
        delete intervals[id];
    }

    return device;
};

// Service to get data points for a device
const getDataPoints = async (id) => {
    return await DataPoint.find({ deviceId: id });
};

// Service to get events for a device
const getEvents = async (id) => {
    return await Event.find({ deviceId: id });
};

module.exports = { createDevice, startDevice, stopDevice, getDataPoints, getEvents };
