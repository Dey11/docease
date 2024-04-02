import express from "express";
import upload from "../middleware/multerMiddleware";

const router = express.Router();

router.post("/upload", upload.single("image"), (req, res) => {
  res.send("Image uploaded");
});

export default router;
