///<reference path="../typings/index.d.ts"/>
import express = require("express");
import {Shop,IShop} from '../models/shop';
import BodyParser = require('body-parser');

let authShop = express.Router();


authShop.post('/addShop', (request: express.Request & BodyParser.ParsedRaw, response: express.Response) => {
   
   let shop = new Shop(request.body);

   shop.save().then( (user : IShop) => {

        response.json(user);
      
   }).end((error : any) => {

       response.json(error);

   })
  
});



export = authShop;
