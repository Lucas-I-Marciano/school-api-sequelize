// import express, { json } from "express";
const express = require("express");
require("dotenv").config();

const app = express();

// app.use(json());

app.get("/test", (req, res) => {
  res.status(200).send({ mensagem: "Welcome to API" });
});

module.exports = app;
