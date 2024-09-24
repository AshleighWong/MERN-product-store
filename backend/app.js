// put type:module in package json to use import export
import express from 'express';
import dotenv from "dotenv";
// import mongoose from 'mongoose';
import {connectDB} from './config/db.js';
// import Product from './models/product.model.js';
import productRoutes from './routes/product.route.js';

//use this to connect to databae
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json()); //middleware to parse json data. allows to accept JSON data in request body

//connects to product routes. if /api/products is called, it will go to productRoutes
app.use("/api/products", productRoutes);

// listen for a port. call callback once it is ready
app.listen(PORT, ()=> {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});

//use this to connect to databae
// console.log(process.env.MONGO_URI)