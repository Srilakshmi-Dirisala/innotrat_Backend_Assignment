const {
    createDevice,
    startDevice,
    stopDevice,
    getDataPoints,
    getEvents,
} = require('../services/device.service');

const createDeviceController = async (req, res) => {
    try {
        const device = await createDevice(req.body.name);
        res.status(200).json({ message: 'Device created', device });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const startDeviceController = async (req, res) => {
    try {
        console.log("reqqq",req.params.id);
        
        const device = await startDevice(req.params.id);
        res.status(200).json({ message: 'Device started', device });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const stopDeviceController = async (req, res) => {
    try {
        const device = await stopDevice(req.params.id);
        res.status(200).json({ message: 'Device stopped', device });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getDataPointsController = async (req, res) => {
    try {
        const data = await getDataPoints(req.params.id);
        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getEventsController = async (req, res) => {
    try {
        const events = await getEvents(req.params.id);
        res.status(200).json({ events });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createDeviceController,
    startDeviceController,
    stopDeviceController,
    getDataPointsController,
    getEventsController,
};
