import express from 'express';

import { FoodModel } from '../../database/food';
import { validateCategory, validateId } from '../../validation/common.validation';

const Router = express.Router();
/*
*Route      /:_id
*Des        Get food based on id
*Params     _id
*Access     Public
*Method     Get
 */

Router.get('/:_id', async (req, res) => {
    try {
        const { _id } = req.params;

        await validateId(req.params);

        const foods = FoodModel.findById(_id);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
/*
*Route      /r/:_id
*Des        Get food based on particular Restaurant
*Params     _id
*Access     Public
*Method     Get
 */
Router.get("/r/:_id", async (req, res) => {
    try {
        const { _id } = req.params;

        await validateId(req.params);

        const foods = await FoodModel.find({
            restaurant: _id,
        });
        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
/*
*Route      /c/:category
*Des        Get food based on particular category
*Params     category
*Access     Public
*Method     Get
 */
Router.get("/c/:category", async (req, res) => {
    try {
        const { category } = req.params;
        await validateCategory(req.params);

        const foods = await FoodModel.find({
            category: { $regex: category, $options: "i" },
        });
        if (!foods)
            return res.status(404).json({ error: `No food matched with ${category}` });

        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


export default Router;