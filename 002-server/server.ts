///<reference path="./typings/index.d.ts"/>
import express = require("express");
import authRouter = require("./routes/authRouter");
import indexRouter = require("./routes/indexRouter");
import serviceRouter = require("./routes/serviceRouter");
import shop = require('./models/shop');
import path = require('path');
import Mongoose = require('mongoose');
import BodyParser = require('body-parser');
import {Config} from './config'


export class Server {
    /**
     * @param app - express application
     * @param port - port to listen on
     */
    constructor(private app: express.Application, private port: number) {
        this.configureMiddleware(app);
        this.configureRoutes(app);
    }

    /**
     * @param app - express application
     */
    private configureMiddleware(app: express.Application) {
        app.use(BodyParser.json());
        app.use(BodyParser.urlencoded({ extended: true }));
        
    }

    private configureRoutes(app: express.Application) {

        app.use(express.static(path.join(__dirname, "public")));

         app.use("/", indexRouter );
         app.use("/service", serviceRouter );
         app.use("/auth", authRouter );
         app.use("/api/shops", shop );
        
        // mount more routers here
        // e.g. app.use("/organisation", organisationRouter);
    }

    private configureErrorHandlers(app : express.Application){
        app.use((err, req, res, next) => {
            var error = new Error("Not Found");
            err.status = 404;
            next(err);
        });
    }

    

    public run() {
        Mongoose.connect(Config.connectionString);
        this.app.listen(this.port);
    }
}

