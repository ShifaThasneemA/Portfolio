import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST: save contact message
router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.json({ message: "Message sent successfully ✅" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET: view all messages (admin use)
router.get("/", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
