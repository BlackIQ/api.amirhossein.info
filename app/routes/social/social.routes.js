import express from "express";

import { Social } from "$app/controllers/index.js";

import { jwt } from "$app/middlewares/index.js";

const router = express.Router();

router.post("/", jwt, Social.CREATE);
router.get("/", Social.ALL);
router.get("/:id", Social.SINGLE);
router.delete("/:id", jwt, Social.DELETE);
router.patch("/:id", jwt, Social.UPDATE);

export default router;
