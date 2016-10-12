import express = require("express");
import path = require('path');

let indexRouter = express.Router();

indexRouter.get('/', (request: express.Request, response: express.Response) => {
   
    response.sendFile(path.join(__dirname + '/../public/html/serviceProviderApp.html'));
});
// add more route handlers here
// e.g. customerRouter.post('/', (req,res,next)=> {/*...*/})
export = indexRouter;

