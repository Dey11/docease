import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { router as userRoutes } from "./routes/userRoutes";
import { router as uploadFilesRoutes } from "./routes/uploadFilesRoutes";
import connectToMongoDB from "./db/index";

// Create an Express application
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//Mount the routes.
app.use("/api/users", userRoutes);
app.use("/api/upload", uploadFilesRoutes);

// Define routes
app.get("/", (req: Request, res: Response) => {
  res.send("hello world.");
});

// Connect to MongoDB
connectToMongoDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
