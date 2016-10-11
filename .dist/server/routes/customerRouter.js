"use strict";
var express = require("express");
var customerRouter = express.Router();
customerRouter.get('/', function (request, response) {
    response.send("hello world");
});
module.exports = customerRouter;
