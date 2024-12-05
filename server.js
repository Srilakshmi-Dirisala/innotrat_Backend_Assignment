require('dotenv').config();
const server = require('./express')();
const { port = 5500 } = require('./config');
const { connectToMongoDB } = require('./database'); // Import the connection function

const startServer = async () => {
    try {
        await connectToMongoDB(); // Connect to MongoDB before starting the server
        server.listen(port, () => {
            console.log(
                '\x1b[36m%s\x1b[0m',
                `Server is running at http://localhost:${port}`
            );
        });
    } catch (err) {
        console.error('Failed to start server:', err);
    }
};

startServer();
