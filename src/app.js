// import express, { json } from "express";
const express = require("express");

const app = express();

// app.use(json());

app.get("/teste", (req, res) => {
  res.status(200).send({ mensagem: "Welcome to API" });
});

module.exports = app;
