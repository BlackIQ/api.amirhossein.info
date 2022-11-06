import express from "express";

import services from "$services/index.js";

const router = express.Router();
const authentication = services.authentication();

router.post("/login", authentication.login);
router.post("/register", authentication.register);

export default router;
