"use strict";
///<reference path="./typings/index.d.ts"/>
var express = require("express");
var authRouter = require("./routes/authRouter");
var indexRouter = require("./routes/indexRouter");
var serviceRouter = require("./routes/serviceRouter");
var shopsRouter = require("./routes/shopsRouter");
// import shop = require('./models/shop');
var path = require("path");
var Mongoose = require("mongoose");
var BodyParser = require("body-parser");
var config_1 = require("./config");
var Server = (function () {
    /**
     * @param app - express application
     * @param port - port to listen on
     */
    function Server(app, port) {
        this.app = app;
        this.port = port;
        this.configureMiddleware(app);
        this.configureRoutes(app);
    }
    /**
     * @param app - express application
     */
    Server.prototype.configureMiddleware = function (app) {
        app.use(BodyParser.json());
        app.use(BodyParser.urlencoded({ extended: true }));
    };
    Server.prototype.configureRoutes = function (app) {
        app.use(express.static(path.join(__dirname, "public")));
        app.use("/", indexRouter);
        app.use("/service", serviceRouter);
        app.use("/auth", authRouter);
        app.use("/api/shops", shopsRouter);
        // mount more routers here
        // e.g. app.use("/organisation", organisationRouter);
    };
    Server.prototype.configureErrorHandlers = function (app) {
        app.use(function (err, req, res, next) {
            var error = new Error("Not Found");
            err.status = 404;
            next(err);
        });
    };
    Server.prototype.run = function () {
        Mongoose.connect(config_1.Config.connectionString);
        this.app.listen(this.port);
    };
    return Server;
}());
exports.Server = Server;
