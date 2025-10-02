import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

try {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("✅ Connected to MongoDB Atlas successfully");
  process.exit(0);
} catch (err) {
  console.error("❌ Failed to connect:", err.message);
  process.exit(1);
}
