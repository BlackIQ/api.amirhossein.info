import express from "express";

import { Note } from "$app/controllers/index.js";

import { jwt } from "$app/middlewares/index.js";

const router = express.Router();

router.post("/", jwt, Note.CREATE);
router.get("/", Note.ALL);
router.get("/:id", Note.SINGLE);
router.delete("/:id", jwt, Note.DELETE);
router.patch("/:id", jwt, Note.UPDATE);

export default router;
