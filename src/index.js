// require('dotenv').config({path: './env'})
import dotenv from "dotenv"

import mongoose from 'mongoose';
import {DB_NAME} from "./constants.js";
import connectDB from './db/db.js';

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    try {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port : ${process.env.PORT}`);
        }) 

        app.on( (error) => {
            console.log("ERROR: " + error);
            throw error;
        })
    } catch (error) {
        console.error("ERROR: " + error);
        throw error;
    }
})
.catch((error) => {
    console.log("MONGO DB connection failed !!!", error);
})






/*
import express from "express";
const app = express();
// function connectDB() {}
// connectDB()
; ( async () => {
    try {
        await mongoose.connect(`${process.env.DATABASE_LOCAL}/${DB_NAME}`);
        app.on("error", () => {
            console.log("ERRR: ", error);
            throw error;
        })

        app.listen(process.env.PORT, () => { 
            console.log("listening on port " + process.env.PORT);
        })
    } catch (error) {
        console.error("ERROR: " + error);
        throw error;
    }
})()

*/