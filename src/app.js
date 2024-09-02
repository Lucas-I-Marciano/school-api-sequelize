// import express, { json } from "express";
const express = require("express");
const routes = require("./routes"); // It will get index.js by standarization. It must be named "index.js"
require("dotenv").config();

const app = express();
routes(app);

module.exports = app;
