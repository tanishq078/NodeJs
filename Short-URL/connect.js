const mongoose = require("mongoose");

let isConnected = false; // Track connection status

const connectToMongoDB = async (URI) => {
    if (isConnected) {
        console.log("Using existing MongoDB connection");
        return;
    }
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
        console.log("MongoDB connected!");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
    }
};

module.exports = { connectToMongoDB };