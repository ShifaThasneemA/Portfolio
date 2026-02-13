import express from "express";
import bcrypt from "bcryptjs";
import Admin from "../models/Admin.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: "Admin not found ❌" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password ❌" });
    }

    res.json({ message: "Admin login successful ✅" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
