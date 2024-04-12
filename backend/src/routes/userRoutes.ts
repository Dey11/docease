import express, { Request, Response } from "express";
import { register, login, logout } from "../controllers/userController";

export const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
