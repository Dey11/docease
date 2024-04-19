import express from "express";
import upload from "../middleware/multerMiddleware";
import {
  uploadImage,
  uploadPdf,
  uploadDocs,
} from "../controllers/uploadFilesController";
import { authMiddleware } from "../middleware/authMiddleware";

export const router = express.Router();

router.post("/pdf", upload.single("pdf"), uploadPdf);
// @ts-ignore
router.post("/image", authMiddleware, upload.single("image"), uploadImage);
router.post("/docs", upload.single("docs"), uploadDocs);
