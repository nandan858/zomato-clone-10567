import express from 'express';
import { UserModel } from '../../database/allModel';
import passport from 'passport';

const Router = express.Router();

/*
*Route      /
*Des        Get authorized user data
*Params     _id
*Access     Public
*Method     Get
 */

Router.get('/', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const { email, fullName, phoneNumber, address } = req.user;
        return res.json({ user: { email, fullName, phoneNumber, address } });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
*Route      /:_id
*Des        Get user data (For the review system)
*Params     _id
*Access     Public
*Method     Get
 */
Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const getUser = await UserModel.findById(_id);

        if (!getUser) {
            return res.status(404).json({ error: "User not found" });
        }

        const { fullName } = getUser;

        return res.json({ user: { fullName } });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
/*
*Route      /:_id
*Des        Update user data
*Params     _id
*Access     Private
*Method     Put
 */

Router.put('/update/:_id', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const { _id } = req.params;

        const { userData } = req.body;


        const updateUserData = await UserModel.findByIdAndUpdate(_id,
            {
                $set: userData,
            }, {
            new: true,
        });
        return res.json({ user: updateUserData });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


export default Router;