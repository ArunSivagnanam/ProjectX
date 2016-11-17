///<reference path="../typings/index.d.ts"/>
import Mongoose = require('mongoose');
//import express = require("express");

export interface IRepairType extends Mongoose.Document {
  name : string;
  category : Object;
  brand : Object;
  listOfBrandtModels : string;
  averagePrice : number;
};

interface IRepairTypeModel extends IRepairType, Mongoose.Document {}

export const RepairType = Mongoose.model<IRepairTypeModel>('RepairType', new Mongoose.Schema({
    address : String,
    category : Object,
    brand : Object,
    listOfBrandtModels : String,
    averagePrice : Number
}));