import express, { Router } from 'express';
import passport from 'passport';
import { OrderModel } from '../../database/order';

/*
*Route  /:_id
*Des    Get all orders by user id
*Params none
*Access Private
*Method GET
*/

Router.get("/", passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const { user } = req;
        const getOrders = await OrderModel.findOne({ user: user._id });

        if (!getOrders) {
            return res.status(400).json({ error: "user not found" });
        }
        return res.status(200).json({ orders: getOrders });
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
*Route  /:_id
*Des    Add new order
*Params _id
*Access Private
*Method PUT
*/

Router.put('/new/:_id', passport.authenticate("jwt", { session: false }, async (req, res) => {
    try {
        const { user } = req;
        const { orderDetails } = req.body;
        const addNewOrder = await OrderModel.findByIdAndUpdate({
            user: user._id
        }, {
            $push: {
                orderDetails: orderDetails,
            },
        }, {
            new: true,
        });
        return res.json({ order: addNewOrder });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}));

