import { Request, Response } from "express";
import upload from "../middleware/multerMiddleware";

export const uploadPdf = (req: Request, res: Response) => {};

export const uploadImage = (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).send("Please upload a file.");
    }
    // res.send(req.file);
    console.log(req.file);
  } catch (error) {
    console.error(error);
    res;
  }
};

export const uploadDocs = (req: Request, res: Response) => {};
