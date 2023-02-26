import express from "express";
import { Auth } from "$controllers/index.js";

const router = express.Router();

router.post("/login", Auth.LOGIN);
router.post("/register", Auth.REGISTER);

export default router;
