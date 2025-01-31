import { model, Schema } from "mongoose";

const FOOD_CATEGORY_SCHEMA = new Schema(
  {
    categoryName: String,
  },
  {
    timestamps: true,
  }
);

const FoodCategoryModel = model("FoodCategory", FOOD_CATEGORY_SCHEMA);

export { FoodCategoryModel };