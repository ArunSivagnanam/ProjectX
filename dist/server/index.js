"use strict";
///<reference path="./typings/index.d.ts"/>
const express = require('express');
const server_1 = require('./server');
let port = 5001; //or from a configuration file
let api = new server_1.Server(express(), port);
api.run();
console.info(`listening on ${port}`);
