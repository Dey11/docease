import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "public/images");
    // return cb(null, path.join(__dirname, "../uploads/"));
  },
  filename: function (req, file, cb) {
    return cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage: storage });
export default upload;
