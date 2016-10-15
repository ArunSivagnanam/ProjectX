///<reference path="../typings/index.d.ts"/>
import Mongoose = require('mongoose');

export interface IUser extends Mongoose.Document {
  name: string; 
  somethingElse?: number; 
};

export const UserSchema = new Mongoose.Schema({
  name: {type:String, required: true},
  somethingElse: Number,
});

