const express = require("express");

const controllers = require("../controllers/authentication.controllers");

const Router = express.Router();

Router.post("/login", controllers.login);
Router.post("/register", controllers.register);

module.exports = Router;