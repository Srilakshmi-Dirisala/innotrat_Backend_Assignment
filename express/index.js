const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { endpoint } = require('../config');
const deviceRoute = require('../src/routes/device.route');

module.exports = () => {
    const app = express();
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use((error, request, response, next) => {
        if (error !== null) {
            return response.json({ status: 401, message: "Invalid JSON", error: error });
        }
        next();
    });
    app.use(endpoint, deviceRoute);
    return app;
};
