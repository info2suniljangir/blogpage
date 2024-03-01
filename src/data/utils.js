const mongoose = require('mongoose');
require('dotenv').config();


// creation of mongo db connection 
export const connectToDb = async () => {
    try {
         // Check if there is an existing connection
         if (mongoose.connection.readyState === 1) {
            console.log('Already connected to MongoDB:', mongoose.connection.name);
            return;
        }

        // Create a new connection if not already connected
        const db = await mongoose.connect(process.env.MONGO);
        // console.log('Connected to MongoDB:', db.connection.name);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}