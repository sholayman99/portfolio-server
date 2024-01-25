/*
* Author: Md. Sholayman
* Description: This is the file that contains all the config of the app
* Date : 23 December 2023
* */


const express = require('express');
const app = new express() ;
const router = require("./src/Routes/api");


//importing database
const mongoose = require("mongoose");

//importing security middlewares

require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const { rateLimit } = require("express-rate-limit");


const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: "draft-7", // draft-6: RateLimit-* headers; draft-7: combined RateLimit header
    legacyHeaders: false, // X-RateLimit-* headers
    // store: ... , // Use an external store for more precise rate limiting
});

//implementation of middlewares

app.use(cors());
app.use(hpp());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(limiter);
app.use(express.json());
app.use(express.urlencoded());


//implementation of routes
app.use("/api/v1", router );

//implementation if undefined route
app.use("*" , (req,res) =>{
    res.status(404).json({message:"Fail",data:"Not Found"});
});


async function connectToMongoDB() {
    try {
        const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qrr0y.mongodb.net/portfolio`;
        const OPTIONS = { user: "", pass: "" };
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");

        // Perform database operations here
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

// Call the async function to connect to MongoDB
connectToMongoDB();


module.exports = app ;