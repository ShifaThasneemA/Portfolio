import express from "express";
import Certificate from "../models/Certificate.js";

const router = express.Router();

// GET all certificates
router.get("/", async (req, res) => {
  const data = await Certificate.find().sort({ createdAt: -1 });
  res.json(data);
});

// ADD certificate
router.post("/", async (req, res) => {
  const { title, issuer, year, description, image } = req.body;

  const cert = new Certificate({
    title,
    issuer,
    year,
    description,
    image,
  });

  await cert.save();
  res.status(201).json({ message: "Certificate added ✅" });
});


// DELETE certificate
router.delete("/:id", async (req, res) => {
  await Certificate.findByIdAndDelete(req.params.id);
  res.json({ message: "Certificate deleted 🗑️" });
});

export default router;
