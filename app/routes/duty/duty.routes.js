import express from "express";

import { Duty } from "$app/controllers/index.js";

import { jwt } from "$app/middlewares/index.js";

const router = express.Router();

router.post("/", jwt, Duty.CREATE);
router.get("/", Duty.ALL);
router.get("/:id", Duty.SINGLE);
router.delete("/:id", jwt, Duty.DELETE);
router.patch("/:id", jwt, Duty.UPDATE);

export default router;
