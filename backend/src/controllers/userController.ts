import { Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.model";

import { IUser } from "../ts/interfaces";
require("dotenv").config();

const salt = bcrypt.genSaltSync(10);

export const register = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser: IUser = {
      email,
      password: hashedPassword,
      name,
    };

    const registeredUser = await User.create(newUser);
    return res.json({
      message: "user has been registered",
      data: registeredUser,
    });
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "failed to register user" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const findUserInDb = await User.findOne({ email });
    if (!findUserInDb) {
      return res.json({ message: "user with that email doesnt exist" });
    }

    const isPassRight = bcrypt.compareSync(password, findUserInDb.password);

    if (!isPassRight) {
      return res.json({ message: "invalid credentials" });
    }
    const jwtSecret = process.env.JWT_SECRET;
    const token = await jwt.sign({ id: findUserInDb._id }, jwtSecret as Secret);
    res.cookie("token", token);
    return res.json({
      message: "user has been logged in",
      data: findUserInDb,
    });
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "user could not be logged in" });
  }
};

export const logout = (req: Request, res: Response) => {
  try {
    res.cookie("token", "");
    return res.json({ message: "logged out" });
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "error" });
  }
};
