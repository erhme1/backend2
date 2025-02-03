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
exports.FoodOrderRouter = void 0;
const express_1 = require("express");
const FoodOrder_1 = require("../models/FoodOrder");
exports.FoodOrderRouter = (0, express_1.Router)();
exports.FoodOrderRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foodOrder = yield FoodOrder_1.FoodOrderModel.find();
    res.send(foodOrder);
}));
exports.FoodOrderRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params;
    const item = yield FoodOrder_1.FoodOrderModel.find({ _id: id });
    res.send(item);
}));
exports.FoodOrderRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    yield FoodOrder_1.FoodOrderModel.create(Object.assign({}, body));
    const foodOrder = yield FoodOrder_1.FoodOrderModel.find();
    res.send(foodOrder);
}));
exports.FoodOrderRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { params, body } = req;
    const foodOrderId = params.id;
    const item = yield FoodOrder_1.FoodOrderModel.find({ _id: foodOrderId });
    const updatedItem = yield FoodOrder_1.FoodOrderModel.findByIdAndUpdate(foodOrderId, Object.assign(Object.assign({}, item), body), { new: true });
    res.json(updatedItem);
}));
exports.FoodOrderRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foodOrderId = req.params.id;
    const deletedFoodOrder = yield FoodOrder_1.FoodOrderModel.findByIdAndDelete(foodOrderId);
    res.send("Deleted this item: " + deletedFoodOrder);
}));
