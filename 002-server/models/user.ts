///<reference path="../typings/index.d.ts"/>
import Mongoose = require('mongoose');

export interface IUser extends Mongoose.Document {
  userName: string; 
  password : string
};

interface IUserModel extends IUser, Mongoose.Document {}

export const User = Mongoose.model<IUserModel>('User', new Mongoose.Schema({
    userName: String,
    password:  String,
    
}));

