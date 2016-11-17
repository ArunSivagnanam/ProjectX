///<reference path="../typings/index.d.ts"/>
import Mongoose = require('mongoose');

export interface IBrandMODEL extends Mongoose.Document {
  repairBrandId: Object;
  brandName: string;
};

interface BrandMODELModel extends IBrandMODEL, Mongoose.Document {}

export const BrandMODEL = Mongoose.model<BrandMODELModel>('BrandMODEL', new Mongoose.Schema({
    repairBrandId: Object,
    brandName: String
}));
