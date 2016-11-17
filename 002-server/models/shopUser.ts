///<reference path="../typings/index.d.ts"/>
import Mongoose = require('mongoose');

export interface IShopUser extends Mongoose.Document {
  shopId: Object;
  userName: string;
  password : string;
};

interface IShopUserModel extends IShopUser, Mongoose.Document {}

export const ShopUser = Mongoose.model<IShopUserModel>('ShopUser', new Mongoose.Schema({
    shopId: Object,
    userName: String,
    password:  String,
}));
