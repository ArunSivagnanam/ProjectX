///<reference path="../typings/index.d.ts"/>
import Mongoose = require('mongoose');

export interface IRepairCategory extends Mongoose.Document {
  name: string;
  description: string;
};

interface RepairCategoryModel extends IRepairCategory, Mongoose.Document {}

export const RepairCategory = Mongoose.model<RepairCategoryModel>('RepairCategory', new Mongoose.Schema({
    name: String,
    description: String
}));
