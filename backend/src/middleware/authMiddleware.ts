import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import { IAuthRequest } from "../ts/interfaces";

export const authMiddleware = async (
  req: IAuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as Secret
    ) as JwtPayload;

    req.decodedId = decoded.id;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "auth failed" });
  }
};
