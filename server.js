const express = require("express");
const cors = require("cors");

require("./config/db");

const donationRoutes = require("./routes/donationRoutes");
const matchingRoutes = require("./routes/matchingRoutes");
const pickupRoutes = require("./routes/pickupRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", donationRoutes);
app.use("/api", matchingRoutes);
app.use("/api", pickupRoutes);

app.get("/", (req,res)=>{
    res.send("Food Rescue API Running");
});

app.listen(5000, ()=>{
    console.log("Server running on port 5000");
});