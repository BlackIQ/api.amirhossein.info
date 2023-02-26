import express from "express";

import Notes from "$routes/notes/notes.routes.js";
import Auth from "$routes/auth/auth.routes.js";

const Router = express();

Router.use("/notes", Notes);
Router.use("/auth", Auth);

export default Router;
