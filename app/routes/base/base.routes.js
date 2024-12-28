import express from "express";

import { Base } from "$controllers";

const router = express.Router();

router.get("/ping", Base.PING);
router.get("/ip", Base.IP);

export default router;
