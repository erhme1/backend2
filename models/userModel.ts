import { model, Schema } from "mongoose";
 
const USERS_SCHEMA = new Schema(
  {
    email: String,
    password: Number,
    phoneNumber: Number,
    address: String,
    role: String,
    orderedFoods: Number,
    ttl: Date,
    isVerified: Boolean,
    ingredients: String,
    price: Number,
    quantity: Number,
  },
  {
    timestamps: true,
  }
);
const usersModel = model("Users", USERS_SCHEMA, "users");
 
export { usersModel };
 
 