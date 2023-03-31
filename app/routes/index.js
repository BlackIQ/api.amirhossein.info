import express from "express";

import Duty from "$routes/duty/duty.routes.js";
import Experience from "$routes/experience/experience.routes.js";
import Personal from "$routes/personal/personal.routes.js";
import Skill from "$routes/skill/skill.routes.js";
import Social from "$routes/social/social.routes.js";
import Resume from "$routes/resume/resume.routes.js";
import Message from "$routes/message/message.routes.js";
import Authentication from "$routes/authentication/authentication.routes.js";

const Router = express();

Router.use("/duties", Duty);
Router.use("/experiences", Experience);
Router.use("/personals", Personal);
Router.use("/skills", Skill);
Router.use("/socials", Social);
Router.use("/resumes", Resume);
Router.use("/messages", Message);
Router.use("/authentication", Authentication);

export default Router;
