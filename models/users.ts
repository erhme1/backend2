import { model, Schema } from "mongoose";
import { FOOD_ORDER_SCHEMA } from "./FoodOrder";

const USER_SCHEMA = new Schema({
  email: String,
  password: String,
  phoneNumber: String,
  address: String,
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
  },
  orderedFoods: [FOOD_ORDER_SCHEMA],
      ttl: Date,
      isVerified: Boolean,
},
{
    timestamps: true
});

const UserModel = model("User", USER_SCHEMA)

export {UserModel}