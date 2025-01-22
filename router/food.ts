import { Request, Response, Router } from "express";
import { FoodModel } from "../models/food";
 
export const FoodRouter = Router();
 
FoodRouter.get("/", async (req: Request, res: Response) => {
  const food = await FoodModel.find();
  res.send(food);
});
 
FoodRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params;
  const item = await FoodModel.find({ _id: id });
  res.send(item);
});
 
FoodRouter.post("/", async (req: Request, res: Response) => {
  const {body} = req;
  await FoodModel.create({...body});
  const food = await FoodModel.find();
 
  res.send(food);
});
 
FoodRouter.put("/:id", async (req: Request, res: Response) => {
  const { params, body } = req;
  const foodId = params.id;
  const item = await FoodModel.find({ _id: foodId });
  const updatedItem = await FoodModel.findByIdAndUpdate(
    foodId,
    { ...item, ...body },
    { new: true }
  );
 
  res.json(updatedItem);
});
 
FoodRouter.delete(
  "/:id",
  async (req: Request<{ id: string }>, res: Response) => {
    const foodId = req.params.id;
    const deletedFood = await FoodModel.findByIdAndDelete(foodId);
    res.send("Deleted this item: " + deletedFood);
  }
);
 
 