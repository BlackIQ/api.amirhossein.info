import express from "express";

import { Permission } from "$app/controllers/index.js";

const router = express.Router();

router.get("/", Permission.ALL);
router.post("/", Permission.CREATE);
router.get("/:id", Permission.SINGLE);
router.delete("/:id", Permission.DELETE);
router.patch("/:id", Permission.UPDATE);

export default router;
