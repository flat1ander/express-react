require('dotenv').config();
const mongoose = require('mongoose');
const {MONGODB_URL} = process.env;

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////

// Establish Connection
mongoose.connect(MONGODB_URL);

// Connection Events
mongoose.connection
    .on('open', () => console.log('You are connected to mongoose'))
    .on('close', () => console.log('You are disconnected from mongoose'))
    .on('error', (error) => console.log(error));

module.exports = mongoose;