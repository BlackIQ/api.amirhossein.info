import express from "express";

import { Authentication } from "$app/controllers/index.js";

const router = express.Router();

router.post("/register", Authentication.REGISTER);
router.post("/login", Authentication.LOGIN);

export default router;
