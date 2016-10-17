import express = require("express");
import path = require('path');

let indexRouter = express.Router();

indexRouter.get('/', (request: express.Request, response: express.Response) => {
   
    response.sendFile(path.join(__dirname + '/../public/html/clientApp.html'));
});

export = indexRouter;

