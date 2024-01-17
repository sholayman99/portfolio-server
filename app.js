/*
* Author:Md.Sholayman
*Description: This is the file that contains all the config for the website
* Date:17-01-2023
* */

//importing necessary module
const express = require("express");
const app = new express();
const mongoose = require("mongoose");
const router = require("./src/Routes/api");

//security middleware
const cors = require("cors");
const hpp = require("hpp");
const helmet = require("helmet");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
require("dotenv").config();
const rateLimit = require("express-rate-limit");



const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, limit: 100, standardHeaders: 'draft-7', legacyHeaders: false,
})


//implementing middlewares
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(express.json());
app.use(xss());
app.use(mongoSanitize());
app.use(rateLimit)


//connection with routes
app.use("api/v1" , router);

//404 not found
app.get("*" , (req,res)=>{
    res.status(404).json({status:"Not Found"})
})


//connection with mongodb database by mongoose
async function connectToMongoDB() {
    try {
        const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dfbtq6i.mongodb.net/portfolio`;
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");

        // Perform database operations here
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

// Call the async function to connect to MongoDB
connectToMongoDB();


module.exports = app;

