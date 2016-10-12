"use strict";
var customerRouter = require("./routes/customerRouter");
var indexRouter = require("./routes/indexRouter");
var serviceRouter = require("./routes/serviceRouter");
var path = require("path");
var bodyParser = require("body-parser");
var express = require("express");
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
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
    };
    Server.prototype.configureRoutes = function (app) {
        app.use(express.static(path.join(__dirname, "public")));
        app.use("/", indexRouter);
        app.use("/service", serviceRouter);
        app.use("/customer", customerRouter);
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
        this.app.listen(this.port);
    };
    return Server;
}());
exports.Server = Server;
