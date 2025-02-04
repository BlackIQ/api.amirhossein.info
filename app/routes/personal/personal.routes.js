import express from "express";

import { PersonalInfo } from "$app/controllers/index.js";

import { jwt } from "$app/middlewares/index.js";

const router = express.Router();

router.post("/", jwt, PersonalInfo.CREATE);
router.get("/", PersonalInfo.ALL);
router.get("/:id", PersonalInfo.SINGLE);
router.delete("/:id", jwt, PersonalInfo.DELETE);
router.patch("/:id", jwt, PersonalInfo.UPDATE);

export default router;
