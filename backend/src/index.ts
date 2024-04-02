import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import uploadFilesRoutes from "./routes/uploadFilesRoutes";
import { connect } from "http2";
import connecttoMongoDB from "./db/index";

// Create an Express application
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const mongo_url = process.env.MONGO_URL;

//middleware to enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

//Mount the routes.
app.use("/api/users", userRoutes);
app.use("/api/upload", uploadFilesRoutes);

// Define routes
app.get("/", (req: Request, res: Response) => {
  res.send("Helloo world this is my server .");
});

// Connect to MongoDB
connecttoMongoDB();

// Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
