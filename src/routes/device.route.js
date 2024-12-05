const express = require('express');
const {
    createDeviceController,
    startDeviceController,
    stopDeviceController,
    getDataPointsController,
    getEventsController,
} = require('../controllers/device.controller');

const router = express.Router();

router.post('/create', createDeviceController);
router.post('/start/:id', startDeviceController);
router.post('/stop/:id', stopDeviceController);
router.get('/data/:id', getDataPointsController);
router.get('/events/:id', getEventsController);

module.exports = router;
