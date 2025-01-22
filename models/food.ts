import { model, Schema } from "mongoose";
 
const FOOD_SCHEMA = new Schema(
  {
    foodName: String,
    price: Number,
    image: String,
    ingredients: String,
    category: Schema.Types.ObjectId,
  },
  {
    timestamps: true,
  }
);
 
const FoodModel = model("Food", FOOD_SCHEMA);
 
export { FoodModel };