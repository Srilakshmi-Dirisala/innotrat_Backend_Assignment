const mongoose = require('mongoose');


const mongoUri = `mongodb+srv://dirisalasrilakshmi:aDjNV3LVJbtbDZs4@cluster0.hof0q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Connect to MongoDB
const connectToMongoDB = async () => {
    try {
        const connection = await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
        return connection;
    } catch (err) {
        console.error('MongoDB Connection Failed! Error: ', err);
        throw err;
    }
};

module.exports = {
    connectToMongoDB,
};






// mongodb+srv://dirisalasrilakshmi:<aVEvWk9qEEhWuLTZ>@cluster0.hof0q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0