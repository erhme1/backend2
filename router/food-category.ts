import { Request, Response, Router } from "express";
import { FoodCategoryModel } from "../models/food-category";

export const FoodCategoryRouter = Router();

FoodCategoryRouter.get("/", async (req: Request, res: Response) => {
  const foodCategories = await FoodCategoryModel.find();
  res.send(foodCategories);
});

FoodCategoryRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params;
  const item = await FoodCategoryModel.find({ _id: id });
  res.send(item);
});

FoodCategoryRouter.post("/", async (req: Request, res: Response) => {
  const {body} = req;
  await FoodCategoryModel.create({ ...body });
  const foodCategories = await FoodCategoryModel.find();

  res.send(foodCategories);
});

FoodCategoryRouter.put("/:id", async (req: Request, res: Response) => {
  const { params, body } = req; 
  const foodCategoryId = params.id;
  const item = await FoodCategoryModel.find({ _id: foodCategoryId });
  const updatedItem = await FoodCategoryModel.findByIdAndUpdate(
    foodCategoryId,
    { ...item, ...body },
    { new: true }
  );

  res.json(updatedItem);
});

FoodCategoryRouter.delete(
  "/:id",
  async (req: Request<{ id: string }>, res: Response) => {
    const foodCategoryId = req.params.id;
    const deletedCategory = await FoodCategoryModel.findByIdAndDelete(
      foodCategoryId
    );
    res.send("Deleted this item: " + deletedCategory);
  }
);