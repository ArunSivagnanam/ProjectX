"use strict";
///<reference path="./typings/index.d.ts"/>
var express = require("express");
var server_1 = require("./server");
var port = 8080; //or from a configuration file
var api = new server_1.Server(express(), port);
api.run();
console.info("listening on " + port);
