import express from "express";

import Duty from "$routes/duty/duty.routes.js";
import Experience from "$routes/experience/experience.routes.js";
import Personal from "$routes/personal/personal.routes.js";
import Skill from "$routes/skill/skill.routes.js";
import Social from "$routes/social/social.routes.js";

const Router = express();

Router.use("/duties", Duty);
Router.use("/experiences", Experience);
Router.use("/personals", Personal);
Router.use("/skills", Skill);
Router.use("/socials", Social);

export default Router;
