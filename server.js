// DEPENDENCIES

//this brings all our .env variables into this file
require('dotenv').config();

// process.env is an object so we can use object destructuring to create the appropriate key/value pairs automatically
const { PORT, MONGODB_URL } = process.env;

const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

const peopleRouter = require('./controllers/people');

// MIDDLEWARE

// to prevent cors errors this opens access to all origins
app.use(cors()); 
// this give you server logs
app.use(morgan("dev"));
// parsing the express body as json
app.use(express.json());

app.use('/people', peopleRouter);

// ROUTES

app.get('/', (req, res) => {
    res.send("hello world");
})

// LISTENER (SERVER START)

app.listen(PORT, () => {
    console.log("listening on port "+PORT)
})