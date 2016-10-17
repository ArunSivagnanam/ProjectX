///<reference path="../typings/index.d.ts"/>
import express = require("express");
import {User,IUser} from '../models/user';
import BodyParser = require('body-parser');

let authRouter = express.Router();


authRouter.post('/addUser', (request: express.Request & BodyParser.ParsedRaw, response: express.Response) => {
   
   let user = new User(request.body);

   user.save().then( (user : IUser) => {

        response.json(user);       
      
   }).end((error : any) => {

       response.json(error);

   })
  
});



export = authRouter;