"use strict";
const express = require("express");
let customerRouter = express.Router();
customerRouter.get('/', (request, response) => {
    response.send("hello world");
});
module.exports = customerRouter;
