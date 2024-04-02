import express, { Request, Response } from "express";
import { registerUser, loginUser } from "../controllers/userController";
const router = express.Router(); //router comes with express.

router.get("/register", registerUser);
router.get("/login", loginUser);

export default router;
