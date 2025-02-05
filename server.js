const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());  // Middleware to parse JSON requests
app.use(cors());          // Enable CORS

// MongoDB Connection
mongoose.connect(process.env.DB_URL)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Import Routes
const menuRoutes = require("./routes/menu");
app.use("/menu", menuRoutes);

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
