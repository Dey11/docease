import { Request } from "express";

export interface IUser {
  name: string;
  email: string;
  password: string;
  isAdmin?: boolean;
  createdAt?: Date;
  profilePic?: string;
}

export interface IAuthRequest extends Request {
  decodedId: string;
}
