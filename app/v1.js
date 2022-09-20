const express = require("express");

const ViewRoutes = require("./routes/view.routes");
const MessageRoutes = require("./routes/message.routes");
const AuthenticatioRoutes = require("./routes/authentication.routes");

const app = express();

app.use("/view", ViewRoutes);
app.use("/message", MessageRoutes);
app.use("/authentication", AuthenticatioRoutes);

module.exports = app;