"use strict";
var express = require("express");
var path = require("path");
var indexRouter = express.Router();
indexRouter.get('/', function (request, response) {
    response.sendFile(path.join(__dirname + '/../public/html/index.html'));
});
module.exports = indexRouter;
