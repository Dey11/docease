import express from "express";
import upload from "../middleware/multerMiddleware";
import {
  uploadImage,
  uploadPdf,
  uploadDocs,
} from "../controllers/uploadFilesController";

export const router = express.Router();

router.post("/pdf", upload.single("pdf"), uploadPdf);
router.post("/image", upload.single("image"), uploadImage);
router.post("/docs", upload.single("docs"), uploadDocs);
