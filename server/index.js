import express from 'express';
import dotenv from 'dotenv';
import passport from "passport";
import session from "express-session";

//Private route authorization config
import privateRouteConfig from "./config/route.config";

//Database Connection
import ConnectDB from "./database/connection"
dotenv.config();

import Auth from "./api/auth/index";
import Food from "./api/food";
import Restaurant from "./api/food";
import User from './api/user';

//adding additional passport configuration
privateRouteConfig(passport);

const zomato = express();


zomato.use(express.json());
zomato.use(session({ secret: "ZomatoApp" }));
zomato.use(passport.initialize());
zomato.use(passport.session());

zomato.get('/', (req, res) => {
    res.json({
        message: "Server is running",
    });
});

//auth/signup
zomato.use("/auth", Auth);
zomato.use("/food", Food);
zomato.use("/restaurant", Restaurant);
zomato.use("/user", passport.authenticate("jwt", { session: false }), User);
const PORT = 4000;

zomato.listen(PORT, () => {
    ConnectDB()
        .then(() => {
            console.log("Server is running !!!");
        })
        .catch((error) => {
            console.log("Server is running, but database connection failed...");
            console.log(error);
        });
});