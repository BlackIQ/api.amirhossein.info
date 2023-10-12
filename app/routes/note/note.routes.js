import express from "express";

import { Note } from "$controllers";
import { jwt } from "$middlewares";

const router = express.Router();

router.post("/", jwt, Note.CREATE);
router.get("/", Note.ALL);
router.get("/:id", Note.SINGLE);
router.delete("/:id", jwt, Note.DELETE);
router.patch("/:id", jwt, Note.UPDATE);
router.patch("/clap/:id", Note.CLAP);

export default router;
