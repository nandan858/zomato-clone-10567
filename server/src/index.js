import express from 'express';
import dotenv from 'dotenv';
import passport from "passport";
import session from "express-session";
import cors from 'cors'
import helmet from 'helmet'

import Image from './api/image';

//Private route authorization config
import privateRouteConfig from "./config/route.config";

//Database Connection
import ConnectDB from "./database/connection";

import Auth from "./api/auth/index";
import Food from "./api/food";
import Restaurant from "./api/restaurant";
import User from './api/user';
import Menu from './api/menu';

import googleAuthConfig from './config/google.config';

googleAuthConfig(passport);

dotenv.config();

//adding additional passport configuration
privateRouteConfig(passport);

const zomato = express();


zomato.use(cors({origin : "http://localhost:3000"}));
zomato.use(helmet());

zomato.use(express.json());
zomato.use(session({ secret: process.env.JWTSECRET }));
zomato.use(passport.initialize());
zomato.use(passport.session());
zomato.use('/image', Image);


zomato.get('/', (req, res) => {
    res.json({
        message: "Server is running",
    });
});

//auth/signup
zomato.use("/auth", Auth);
zomato.use("/food", Food);
zomato.use("/restaurant", Restaurant);
zomato.use("/user", User);
zomato.use("/menu", Menu);
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