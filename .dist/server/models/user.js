"use strict";
///<reference path="../typings/index.d.ts"/>
var Mongoose = require("mongoose");
;
exports.User = Mongoose.model('User', new Mongoose.Schema({
    userName: String,
    password: String,
}));
