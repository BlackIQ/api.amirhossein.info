import express from "express";

import { Duty } from "$controllers";
import { jwt } from "$middlewares";

const router = express.Router();

router.post("/", jwt, Duty.CREATE);
router.get("/", Duty.ALL);
router.get("/:id", Duty.SINGLE);
router.delete("/:id", jwt, Duty.DELETE);
router.patch("/:id", jwt, Duty.UPDATE);

export default router;
