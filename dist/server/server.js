"use strict";
const customerRouter = require("./routes/customerRouter");
const path = require('path');
const bodyParser = require("body-parser");
const express = require("express");
class Server {
    /**
     * @param app - express application
     * @param port - port to listen on
     */
    constructor(app, port) {
        this.app = app;
        this.port = port;
        this.configureMiddleware(app);
        this.configureRoutes(app);
    }
    /**
     * @param app - express application
     */
    configureMiddleware(app) {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
    }
    configureRoutes(app) {
        app.use(express.static(path.join(__dirname, "public")));
        app.use("/customer", customerRouter);
        // mount more routers here
        // e.g. app.use("/organisation", organisationRouter);
    }
    configureErrorHandlers(app) {
        app.use((err, req, res, next) => {
            var error = new Error("Not Found");
            err.status = 404;
            next(err);
        });
    }
    run() {
        this.app.listen(this.port);
    }
}
exports.Server = Server;
