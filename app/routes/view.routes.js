const express = require("express");

const controllers = require("../controllers/view.controllers");

const Router = express.Router();

Router.post("/", controllers.create);
Router.get("/", controllers.readAll);

module.exports = Router;