"use strict"

const express = require('express');

const UserController = require('../controllers/users.controller');
const auth = require('../middlewares/auth');

const userRoute = express.Router();

userRoute.get("/users/auth", auth, UserController.UserAuth);

module.exports = userRoute;
