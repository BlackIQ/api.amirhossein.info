import express from "express";

import services from "$services/index.js";

const router = express.Router();
const message = services.message();

router.post("/", message.create);
router.get("/", message.readAll);
router.get("/:id", message.readOne);
router.delete("/:id", message.deleteOne);

export default router;
