///<reference path="../typings/index.d.ts"/>
import Mongoose = require('mongoose');
//import express = require("express");

export interface IShop extends Mongoose.Document {
  name: string; 
  address : string;
  description : string;
  supported_phones : string;
  logo_url : string;
  banner_url : string;
  shop_url : string;
//  create_date: Date;
};

interface IShopModel extends IShop, Mongoose.Document {}

export const Shop = Mongoose.model<IShopModel>('Shop', new Mongoose.Schema({
    name: String, 
    address : String,
    description : String,
    supported_phones : String,
    logo_url : String,
    banner_url : String,
    shop_url : String,
//    create_date: Date,
    
}));