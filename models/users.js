"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const FoodOrder_1 = require("./FoodOrder");
const USER_SCHEMA = new mongoose_1.Schema({
    email: String,
    password: String,
    phoneNumber: String,
    address: String,
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
    },
    orderedFoods: [FoodOrder_1.FOOD_ORDER_SCHEMA],
    ttl: Date,
    isVerified: Boolean,
}, {
    timestamps: true
});
const UserModel = (0, mongoose_1.model)("User", USER_SCHEMA);
exports.UserModel = UserModel;
