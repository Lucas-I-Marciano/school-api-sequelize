const express = require("express");
const persons = require("./personsRoute.js");
const categories = require("./categoriesRoute.js");
const courses = require("./coursesRoute.js");

// app is the express' instance created on app.js
module.exports = (app) => {
  app.use(express.json(), persons, categories, courses);
};
