const mongoose = require("mongoose");

const VolunteerSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    latitude: Number,
    longitude: Number
});

module.exports = mongoose.model("Volunteer", VolunteerSchema);