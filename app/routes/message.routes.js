const express = require("express");

const controllers = require("../controllers/message.controllers");

const Router = express.Router();

Router.post("/", controllers.create);
Router.get("/", controllers.readAll);
Router.get("/:id", controllers.readOne);

module.exports = Router;