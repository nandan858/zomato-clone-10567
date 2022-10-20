import express from 'express';

import { RestaurantModel } from "../../database/allModel";

const Router = express.Router();
/*
*Route      /:
*Des        Get all the restaurant details based on he city
*Params     _id
*Access     Public
*Method     Get
 */

Router.get('/', async (req, res) => {
    try {
        //http://localhost:4000/restaurant/?city=ncr
        const { city } = req.query;
        const restaurants = await RestaurantModel.find({ city });
        if (restaurants.length === 0) {
            return res.json({ error: "No restaurant found in this city." })
        }
        return res.json({ restaurants });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/*
*Route      /:_id
*Des        Get individual restaurant details based on id
*Params     _id
*Access     Public
*Method     Get
 */

Router.get('/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const restaurant = await RestaurantModel.findById(_id);

        if (!restaurant) {
            return res.status(400).json({ error: "Restaurant not found" });
        }

        return res.json({ restaurant });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/*
*Route      /search/:searchString
*Des        Get individual restaurant details based on id
*Params     searchString
*Access     Public
*Method     Get
 */

Router.get('/search/:searchString', async (req, res) => {

    /*
    *searchString = Raj
    *results ={
        *Rajhotel
        *RajRao
        *RonRaj
        *rajrao
    }
     */
    try {
        const { searchString } = req.params;
        const restaurants = await RestaurantModel.find({
            name: { $regex: searchString, $options: "i" },
        });
        if (!restaurants.length === 0) {
            returnres.status(404).json({ error: `No restaurant matched with ${searchString}` })
        }

        return res.json({ restaurants });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})
export default Router;