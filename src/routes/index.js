const express = require("express");
const persons = require("./personsRoute.js");

// app is the express' instance created on app.js
module.exports = (app) => {
  app.use(express.json(), persons);
};
