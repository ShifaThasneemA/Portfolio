import bcrypt from "bcryptjs";

const hash = await bcrypt.hash("shifa123", 10);
console.log(hash);
