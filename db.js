// Connection to MongoDB file

const mongoose = require('mongoose'); //Commonjs Module - Default
require('dotenv').config();

async function connectDB(){
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
}

module.exports = { connectDB, mongoose };