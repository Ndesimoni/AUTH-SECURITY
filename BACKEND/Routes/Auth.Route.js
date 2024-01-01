const express = require("express");
const postRequest = require("../controlers/Auth.Controler.js");

const Router = express.Router();

Router.post("/", postRequest);

module.exports = Router;
