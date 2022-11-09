import express from "express";

import AuthenticatioRoutes from "$routes/authentication/authentication.routes.js";
import MessageRoutes from "$routes/message/message.routes.js";
import LogRoutes from "$routes/log/log.routes.js";

const Router = express();

Router.use("/log", LogRoutes);
Router.use("/message", MessageRoutes);
Router.use("/authentication", AuthenticatioRoutes);

export default Router;
