import { Router } from "express";
import UserControl from "../controllers/userControl.js";

const router = Router();

router.get("/get/:userID", UserControl.getUser)

export default router;