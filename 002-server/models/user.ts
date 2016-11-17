///<reference path="../typings/index.d.ts"/>
import Mongoose = require('mongoose');

export interface IUser extends Mongoose.Document {
  shopId: Object;
  userName: string; 
  password : string;
};

interface IUserModel extends IUser, Mongoose.Document {}

export const User = Mongoose.model<IUserModel>('User', new Mongoose.Schema({
    shopId: Object,
    userName: String,
    password:  String,
    
}));

