import express from "express";

import { Duty } from "$controllers";

const router = express.Router();

router.post("/", Duty.CREATE);
router.get("/", Duty.ALL);
router.get("/:id", Duty.SINGLE);
router.delete("/:id", Duty.DELETE);
router.patch("/:id", Duty.UPDATE);

export default router;
