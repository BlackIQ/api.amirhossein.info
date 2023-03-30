import express from "express";

import { Message } from "$controllers";

const router = express.Router();

router.post("/", Message.CREATE);
router.get("/", Message.ALL);
router.get("/:id", Message.SINGLE);
router.delete("/:id", Message.DELETE);
router.patch("/:id", Message.UPDATE);

export default router;
