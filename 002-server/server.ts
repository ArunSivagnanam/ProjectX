///<reference path="./typings/index.d.ts"/>
import {Application} from '~express/lib/application';
import customerRouter = require("./routes/customerRouter");
import indexRouter = require("./routes/indexRouter");
import serviceRouter = require("./routes/serviceRouter");
import path = require('path');

const bodyParser = require("body-parser");
const express = require("express");

export class Server {
    /**
     * @param app - express application
     * @param port - port to listen on
     */
    constructor(private app: Application, private port: number) {
        this.configureMiddleware(app);
        this.configureRoutes(app);

        
    }

    /**
     * @param app - express application
     */
    private configureMiddleware(app: Application) {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        
    }

    private configureRoutes(app: Application) {

        app.use(express.static(path.join(__dirname, "public")));

         app.use("/", indexRouter );
         app.use("/service", serviceRouter );
         app.use("/customer", customerRouter );
        
        // mount more routers here
        // e.g. app.use("/organisation", organisationRouter);
    }

    private configureErrorHandlers(app : Application){
        app.use((err, req, res, next) => {
            var error = new Error("Not Found");
            err.status = 404;
            next(err);
        });
    }

    public run() {
        this.app.listen(this.port);  
    }
}

