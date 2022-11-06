import express from "express";

import AuthenticatioRoutes from "$routes/authentication/authentication.routes.js";
import MessageRoutes from "$routes/message/message.routes.js";
import ViewRoutes from "$routes/view/view.routes.js";

const Router = express();

Router.use("/view", ViewRoutes);
Router.use("/message", MessageRoutes);
Router.use("/authentication", AuthenticatioRoutes);

export default Router;
