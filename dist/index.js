"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const food_category_1 = require("./router/food-category");
const food_1 = require("./router/food");
const users_1 = require("./models/users");
const fs = require("fs");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 8000;
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
(0, dotenv_1.configDotenv)();
const connectMongoDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const MONGODB_URI = process.env.MONGODB_URI;
    yield mongoose.connect(MONGODB_URI);
});
connectMongoDb();
app.use("/food-category", food_category_1.FoodCategoryRouter);
app.use("/food", food_1.FoodRouter);
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield users_1.UserModel.find();
    res.json(users);
}));
app.post("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield users_1.UserModel.create({
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
}));
app.delete("/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteId = req.params.id;
    const deleteUsers = yield users_1.UserModel.findByIdAndDelete(deleteId);
    res.json({ message: "Users deleted", deleteUsers });
}));
app.put("/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updateId = req.params.id;
    const usersUpdate = yield users_1.UserModel.findByIdAndUpdate(updateId, {
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
    }, { new: true });
    res.json(usersUpdate);
}));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
