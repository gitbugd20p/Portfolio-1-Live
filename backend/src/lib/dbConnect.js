const mongoose = require("mongoose");

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(process.env.DB_URL, {
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log("Database connected successfully");
}

module.exports = dbConnect;
