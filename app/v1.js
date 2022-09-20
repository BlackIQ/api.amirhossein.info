const express = require("express");

const MessageRoutes = require("./routes/message.routes");

const app = express();

app.use("/message", MessageRoutes);

module.exports = app;