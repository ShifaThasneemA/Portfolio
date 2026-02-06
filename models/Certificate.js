import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: String,
    issuer: String,
    year: String,
  },
  { timestamps: true }
);

export default mongoose.model("Certificate", schema);
