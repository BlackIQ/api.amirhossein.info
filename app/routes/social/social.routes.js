import express from "express";

import { Social } from "$app/controllers/index.js";

const router = express.Router();

router.post("/", Social.CREATE);
router.get("/", Social.ALL);
router.get("/:id", Social.SINGLE);
router.delete("/:id", Social.DELETE);
router.patch("/:id", Social.UPDATE);

export default router;
