const express = require("express");
const router = express.Router();

const Donation = require("../models/Donation");

/* Create Donation */

router.post("/donate", async (req, res) => {

console.log("Incoming donation:", req.body); 
try {

const {
donor_id,
food_type,
quantity,
location,
latitude,
longitude,
expiry_time
} = req.body;

/* Create donation object */

const donation = new Donation({

donor_id: donor_id,
food_type: food_type,
quantity: quantity,
location: location,
latitude: latitude,
longitude: longitude,
expiry_time: expiry_time,
status: "Pending"

});

/* Save to MongoDB */

await donation.save();

/* Return saved data */

res.json({
message: "Food donation added successfully",
donation: donation
});

} catch (err) {

res.status(500).json({
message: "Error creating donation",
error: err.message
});

}

});

/* Get All Donations */

router.get("/donations", async (req, res) => {

try {

const donations = await Donation.find();

res.json(donations);

} catch (err) {

res.status(500).json({
message: "Error fetching donations",
error: err.message
});

}

});

module.exports = router;