import express from "express";

import Authentication from "$app/routes/authentication/authentication.routes.js";
import Experience from "$app/routes/experience/experience.routes.js";
import Skill from "$app/routes/skill/skill.routes.js";
import Social from "$app/routes/social/social.routes.js";
import Resume from "$app/routes/resume/resume.routes.js";
import Message from "$app/routes/message/message.routes.js";
import Note from "$app/routes/note/note.routes.js";
import Base from "$app/routes/base/base.routes.js";
import Permission from "$app/routes/permission/permission.routes.js";
import Role from "$app/routes/role/role.routes.js";

import { jwt } from "$app/middlewares/index.js";

const router = express.Router();

router.use("/authentication", Authentication);
router.use("/experiences", Experience);
router.use("/skills", Skill);
router.use("/socials", Social);
router.use("/resumes", Resume);
router.use("/messages", Message);
router.use("/notes", Note);
router.use("/base", Base);
router.use("/permissions", Permission);
router.use("/roles", Role);

export default router;
