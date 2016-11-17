///<reference path="../typings/index.d.ts"/>
import Mongoose = require('mongoose');
//import express = require("express");

export interface IShop extends Mongoose.Document {
  address : string;
  name : string;
  cvr : number;
  phoneNumber : number;
  gpsLocation : [number, number];
  openingHours : [string,string,string,string,string,string,string];
  logoUrl : string;
  storeFrontPictureUrl : string;
  create_date: Date;
};

interface IShopModel extends IShop, Mongoose.Document {}

export const Shop = Mongoose.model<IShopModel>('Shop', new Mongoose.Schema({
    address : String,
    name : String,
    cvr : Number,
    phoneNumber : Number,
    gpsLocation : [Number, Number],
    openingHours : [String,String,String,String,String,String,String],
    logoUrl : String,
    storeFrontPictureUrl : String,
    create_date: Date
}));