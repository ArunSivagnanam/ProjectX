"use strict";
///<reference path="../typings/index.d.ts"/>
var Mongoose = require("mongoose");
;
exports.User = Mongoose.model('User', new Mongoose.Schema({
    shopId: Object,
    userName: String,
    password: String,
}));
