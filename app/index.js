const express = require("express");
const cors = require("cors");

const v1 = require("./v1");

const app = express();

app.set('json spaces', 2);
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": true,
}));

app.use('/v1', v1);

module.exports = app;