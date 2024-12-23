import express from "express";
import { protectRoute } from "../middelware/auth.middleware";
import { getUsersForSidebar, getMessages, sendMessages } from "../controllers/message.controller";

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessages);
export default router;