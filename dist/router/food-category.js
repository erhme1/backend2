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
exports.FoodCategoryRouter = void 0;
const express_1 = require("express");
const food_category_1 = require("../models/food-category");
exports.FoodCategoryRouter = (0, express_1.Router)();
exports.FoodCategoryRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foodCategories = yield food_category_1.FoodCategoryModel.find();
    res.send(foodCategories);
}));
exports.FoodCategoryRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params;
    const item = yield food_category_1.FoodCategoryModel.find({ _id: id });
    res.send(item);
}));
exports.FoodCategoryRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    yield food_category_1.FoodCategoryModel.create(Object.assign({}, body));
    const foodCategories = yield food_category_1.FoodCategoryModel.find();
    res.send(foodCategories);
}));
exports.FoodCategoryRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { params, body } = req;
    const foodCategoryId = params.id;
    const item = yield food_category_1.FoodCategoryModel.find({ _id: foodCategoryId });
    const updatedItem = yield food_category_1.FoodCategoryModel.findByIdAndUpdate(foodCategoryId, Object.assign(Object.assign({}, item), body), { new: true });
    res.json(updatedItem);
}));
exports.FoodCategoryRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foodCategoryId = req.params.id;
    const deletedCategory = yield food_category_1.FoodCategoryModel.findByIdAndDelete(foodCategoryId);
    res.send("Deleted this item: " + deletedCategory);
}));
