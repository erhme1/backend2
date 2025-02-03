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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodRouter = void 0;
const express_1 = require("express");
const food_1 = require("../models/food");
exports.FoodRouter = (0, express_1.Router)();
exports.FoodRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = req.query.category ? { category: req.query.category } : {};
    const foods = yield food_1.FoodModel.find(filter);
    res.send(foods);
}));
exports.FoodRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params;
    const item = yield food_1.FoodModel.find({ _id: id });
    res.send(item);
}));
exports.FoodRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    yield food_1.FoodModel.create(Object.assign({}, body));
    const food = yield food_1.FoodModel.find();
    res.send(food);
}));
exports.FoodRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { params, body } = req;
    const foodId = params.id;
    const item = yield food_1.FoodModel.find({ _id: foodId });
    const updatedItem = yield food_1.FoodModel.findByIdAndUpdate(foodId, Object.assign({}, body), { new: true });
    res.json(updatedItem);
}));
exports.FoodRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foodId = req.params.id;
    const deletedFood = yield food_1.FoodModel.findByIdAndDelete(foodId);
    res.send("Deleted this item: " + deletedFood);
}));
