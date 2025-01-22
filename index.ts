import { configDotenv } from "dotenv";
import { MongoClient } from "mongodb";
import express, { Request, Response } from "express";
import { foodCategoryRouter } from "./router/food-category";
import { FoodRouter } from "./router/food";
import { usersModel } from "./models/users";
const fs = require("fs");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 8000;
const app = express();
app.use(cors());
app.use(express.json());
configDotenv();
 
const connectMongoDb = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;
  await mongoose.connect(MONGODB_URI);
};
connectMongoDb();
app.use("/food-category", foodCategoryRouter);
app.use("/food", FoodRouter);
 
app.get("/users", async (req: Request, res: Response) => {
  const users = await usersModel.find();
  res.json(users);
});
 
app.post("/users", async (req: Request, res: Response) => {
  const newUser = await usersModel.create({
    email: req.body.email,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
    role: req.body.role,
    orderedFoods: req.body.orderedFoods,
    ttl: Date.now(),
    isVerified: req.body.isVerified,
    ingredients: req.body.ingredients,
    price: req.body.price,
    quantity: req.body.quantity,
  });
  res.json({ message: "new food created succesfully", newUser });
});
 
app.delete("/users/:id", async (req: Request, res: Response) => {
  const deleteId = req.params.id;
  const deleteUsers = await usersModel.findByIdAndDelete(deleteId);
 
  res.json({ message: "Users deleted", deleteUsers });
});
 
app.put("/users/:id", async (req: Request, res: Response) => {
  const updateId = req.params.id;
  const usersUpdate = await usersModel.findByIdAndUpdate(
    updateId,
    {
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      role: req.body.role,
      orderedFoods: req.body.orderedFoods,
      ttl: Date.now(),
      isVerified: req.body.isVerified,
      ingredients: req.body.ingredients,
      price: req.body.price,
      quantity: req.body.quantity,
    },
    { new: true }
  );
  res.json(usersUpdate);
});
 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
 
 