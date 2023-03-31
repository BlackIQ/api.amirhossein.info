import express from "express";

import { Authentication } from "$controllers";

const router = express.Router();

router.post("/register", Authentication.REGISTER);
router.post("/login", Authentication.LOGIN);

export default router;
