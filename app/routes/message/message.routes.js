import express from "express";

import { Message } from "$controllers";
import { jwt } from "$middlewares";

const router = express.Router();

router.post("/", Message.CREATE);
router.get("/", jwt, Message.ALL);
router.get("/:id", jwt, Message.SINGLE);
router.delete("/:id", jwt, Message.DELETE);
router.patch("/:id", jwt, Message.UPDATE);

export default router;
