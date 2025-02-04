import express from "express";

import Authentication from "$app/routes/authentication/authentication.routes.js";
import Experience from "$app/routes/experience/experience.routes.js";
import Duty from "$app/routes/duty/duty.routes.js";
import Skill from "$app/routes/skill/skill.routes.js";
import Social from "$app/routes/social/social.routes.js";
import Resume from "$app/routes/resume/resume.routes.js";
import Personal from "$app/routes/personal/personal.routes.js";
import Message from "$app/routes/message/message.routes.js";
import Note from "$app/routes/note/note.routes.js";
import Base from "$app/routes/base/base.routes.js";
import Permission from "$app/routes/permission/permission.routes.js";
import Role from "$app/routes/role/role.routes.js";

import { jwt } from "$app/middlewares/index.js";

const router = express.Router();

router.use("/authentication", Authentication);
router.use("/experiences", Experience);
router.use("/duties", Duty);
router.use("/skills", Skill);
router.use("/socials", Social);
router.use("/resumes", Resume);
router.use("/personals", Personal);
router.use("/messages", Message);
router.use("/notes", Note);
router.use("/base", Base);
router.use("/permissions", jwt, Permission);
router.use("/roles", jwt, Role);

export default router;
