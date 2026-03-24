const express = require("express");
const router = express.Router();

const Pickup = require("../models/Pickup");


// 1️⃣ Assign pickup to volunteer
router.post("/pickup", async (req, res) => {
    try {

        const { donation_id, volunteer_id } = req.body;

        if (!donation_id || !volunteer_id) {
            return res.status(400).json({
                message: "donation_id and volunteer_id are required"
            });
        }

        const pickup = new Pickup({
            donation_id,
            volunteer_id,
            status: "Assigned"
        });

        await pickup.save();

        res.status(201).json({
            message: "Pickup assigned successfully",
            pickup
        });

    } catch (error) {
        res.status(500).json({
            message: "Error assigning pickup",
            error: error.message
        });
    }
});


// 2️⃣ Update pickup status
router.put("/pickup/:id", async (req, res) => {
    try {

        const pickup = await Pickup.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status },
            { new: true }
        );

        if (!pickup) {
            return res.status(404).json({
                message: "Pickup not found"
            });
        }

        res.json({
            message: "Pickup status updated successfully",
            pickup
        });

    } catch (error) {
        res.status(500).json({
            message: "Error updating pickup",
            error: error.message
        });
    }
});


// 3️⃣ Get all pickups
router.get("/pickups", async (req, res) => {

try {

const pickups = await Pickup.find();

res.json(pickups);

} catch (error) {

res.status(500).json({
message: "Error fetching pickups",
error: error.message
});

}

});



module.exports = router;