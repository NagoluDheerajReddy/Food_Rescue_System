const mongoose = require("mongoose");

const PickupSchema = new mongoose.Schema({
    donation_id: String,
    volunteer_id: String,
    status: {
        type: String,
        default: "Assigned"
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Pickup", PickupSchema);