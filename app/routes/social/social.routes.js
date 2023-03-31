import express from "express";

import { Social } from "$controllers";
import { jwt } from "$middlewares";

const router = express.Router();

router.post("/", jwt, Social.CREATE);
router.get("/", Social.ALL);
router.get("/:id", Social.SINGLE);
router.delete("/:id", jwt, Social.DELETE);
router.patch("/:id", jwt, Social.UPDATE);

export default router;
