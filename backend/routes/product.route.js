import express from 'express';
// import mongoose from 'mongoose';
// import Product from '../models/product.model.js';
import { createProduct, getProducts, updateProduct, deleteProduct } from '../controllers/product.controllers.js';

const router = express.Router();

//just moved from app so replace app. with router.
//then put functions in controllers

router.get("/", getProducts);

router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);


export default router;