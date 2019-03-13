"use strict"

const express = require('express');

const UserController = require('../controllers/users.controller');
const auth = require('../middlewares/auth');

const userRoute = express.Router();

userRoute.post("/users/register", UserController.UserRegister);
userRoute.post("/users/login", UserController.UserLogin);
userRoute.get("/users/auth", auth, UserController.UserAuth);
userRoute.get("/users/logout", auth, UserController.UserLogout);

module.exports = userRoute;
