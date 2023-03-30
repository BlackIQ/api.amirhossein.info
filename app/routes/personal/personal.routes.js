import express from "express";

import { PersonalInfo } from "$controllers";

const router = express.Router();

router.post("/", PersonalInfo.CREATE);
router.get("/", PersonalInfo.ALL);
router.get("/:id", PersonalInfo.SINGLE);
router.delete("/:id", PersonalInfo.DELETE);
router.patch("/:id", PersonalInfo.UPDATE);

export default router;
