import { Request, Response, Router } from "express";
import { FoodOrderModel } from "../models/FoodOrder";

export const FoodOrderRouter = Router();

FoodOrderRouter.get("/", async (req: Request, res: Response) => {
  const foodOrder = await FoodOrderModel.find();
  res.send(foodOrder);
});

FoodOrderRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params;
  const item = await FoodOrderModel.find({ _id: id });
  res.send(item);
});

FoodOrderRouter.post("/", async (req: Request, res: Response) => {
    const {body} = req
  await FoodOrderModel.create({ ...body });
  const foodOrder = await FoodOrderModel.find();

  res.send(foodOrder);
});

FoodOrderRouter.put("/:id", async (req: Request, res: Response) => {
  const { params, body } = req;
  const foodOrderId = params.id;
  const item = await FoodOrderModel.find({ _id: foodOrderId });
  const updatedItem = await FoodOrderModel.findByIdAndUpdate(
    foodOrderId,
    { ...item, ...body },
    { new: true }
  );

  res.json(updatedItem);
});

FoodOrderRouter.delete(
  "/:id",
  async (req: Request<{ id: string }>, res: Response) => {
    const foodOrderId = req.params.id;
    const deletedFoodOrder = await FoodOrderModel.findByIdAndDelete(foodOrderId);
    res.send("Deleted this item: " + deletedFoodOrder);
  }
);