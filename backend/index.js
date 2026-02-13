import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import certificateRoutes from "./routes/certificateRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend is working");
});

// routes
app.use("/api/certificates", certificateRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);

// db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch(err => console.log("MongoDB error ❌", err.message));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

