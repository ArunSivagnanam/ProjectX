"use strict";
///<reference path="../typings/index.d.ts"/>
var express = require("express");
var user_1 = require("../models/user");
var authRouter = express.Router();
authRouter.post('/addUser', function (request, response) {
    var user = new user_1.User(request.body);
    user.save().then(function (user) {
        response.json(user);
    }).end(function (error) {
        response.json(error);
    });
});
module.exports = authRouter;
