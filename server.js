const express = require("express");
const cors = require("cors");
const path = require("path");

require("./config/db"); // MongoDB connection is here

const donationRoutes = require("./routes/donationRoutes");
const matchingRoutes = require("./routes/matchingRoutes");
const pickupRoutes = require("./routes/pickupRoutes");

const app = express();

/* Middlewares */
app.use(cors());
app.use(express.json());

/* Serve frontend */
app.use(express.static(path.join(__dirname, "../frontend")));

/* API Routes */
app.use("/api", donationRoutes);
app.use("/api", matchingRoutes);
app.use("/api", pickupRoutes);

/* Home Route */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

/* Start Server */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
