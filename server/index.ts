///<reference path="./typings/index.d.ts"/>
import express = require('express');
import { Server } from './server'

let port = 5001; //or from a configuration file
let api = new Server(express(), port);
api.run();
console.info(`listening on ${port}`);