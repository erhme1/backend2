import { Request, Response, Router } from "express";
import { FoodCategoryModel } from "../models/food-category";

export const foodCategoryRouter = Router();

foodCategoryRouter.get("/", async (req, res) => {
    const items = await FoodCategoryModel.find();
    res.json(items);
});

foodCategoryRouter.post("", async (req: Request, res: Response) => {
    const {body} = req;
    console.log(body);
    const newItem = await FoodCategoryModel.create({...body});

    res.json({
        message: "New category added",
        newItem,
    })
});

foodCategoryRouter.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const item = await FoodCategoryModel.findById(id);
    res.json(item);
})

foodCategoryRouter.put(":id", async (req: Request, res: Response) => {
    const updatedItem = await FoodCategoryModel.findByIdAndUpdate(
        req.params.id,
        { categoryName: req.body.categoryName },
        { new: true }
    );
    res.json(updatedItem);
});

foodCategoryRouter.delete("/:id", async (req: Request, res: Response) => {
    const deletedItem = await FoodCategoryModel.findByIdAndDelete(req.params.id);
    res.json(deletedItem);
});