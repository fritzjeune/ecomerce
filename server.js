// jshint esversion:9

const express = require('express');
const App = express();
const dotenv = require('dotenv');

const productRouter = require('./routes/products');

const connectDB = require('./config/db');
connectDB();

//load env files 
dotenv.config({ path: './config/config.env'});


App.use(express.json());


// connect routes
App.use('/api/v1/ecomerce/', productRouter);


const PORT = 3006 | process.env.PORT;

App.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`)
})