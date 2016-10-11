import express = require("express");

let customerRouter = express.Router();
customerRouter.get('/', (request: express.Request, response: express.Response) => {
   
    response.send("hello world");
});
// add more route handlers here
// e.g. customerRouter.post('/', (req,res,next)=> {/*...*/})
export = customerRouter;