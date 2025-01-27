import { model, Schema } from "mongoose";

const FOOD_ORDER_ITEM_SCHEMA = new Schema({
	food: String,
	quantity: Number,
});

const FOOD_ORDER_SCHEMA = new Schema(
	{
		user: String,
		totalPrices: Number,
		foodOrderitems: [FOOD_ORDER_ITEM_SCHEMA],
		status: {
			type: String,
			enum: ["pending", "cancelled", "delivered"],
			default: "pending",
		},
	},
	{
		timestamps: true,
	}
);
const foodOrder = model("FoodOrder", FOOD_ORDER_SCHEMA);
