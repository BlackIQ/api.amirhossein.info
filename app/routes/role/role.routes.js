import express from "express";

import { Role } from "$app/controllers/index.js";

const router = express.Router();

router.get("/", Role.ALL);
router.post("/", Role.CREATE);
router.get("/:id", Role.SINGLE);
router.delete("/:id", Role.DELETE);
router.patch("/:id", Role.UPDATE);

export default router;
