///<reference path="../typings/index.d.ts"/>
import Mongoose = require('mongoose');

export interface IRepairBrand extends Mongoose.Document {
  categoryId: Object;
  brandName: string;
};

interface RepairBrandModel extends IRepairBrand, Mongoose.Document {}

export const RepairBrand = Mongoose.model<RepairBrandModel>('RepairBrand', new Mongoose.Schema({
    categoryId: Object,
    brandName: String
}));
