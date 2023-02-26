import express from "express";

import { Notes } from "$controllers/index.js";
import { jwt } from "$middlewares/index.js";

const router = express.Router();

router.delete("/:id", jwt, Notes.DELETE);
router.post("/", jwt, Notes.CREATE);
router.get("/:id", Notes.SINGLE);
router.get("/", Notes.ALL);

export default router;
