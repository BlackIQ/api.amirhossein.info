import express from "express";

import { PersonalInfo } from "$controllers";
import { jwt } from "$middlewares";

const router = express.Router();

router.post("/", jwt, PersonalInfo.CREATE);
router.get("/", PersonalInfo.ALL);
router.get("/:id", PersonalInfo.SINGLE);
router.delete("/:id", jwt, PersonalInfo.DELETE);
router.patch("/:id", jwt, PersonalInfo.UPDATE);

export default router;
