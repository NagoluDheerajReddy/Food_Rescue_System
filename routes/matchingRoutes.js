const express = require("express");
const router = express.Router();

const Volunteer = require("../models/Volunteer");
const Donation = require("../models/Donation");
const haversine = require("../services/matchingService");

router.post("/match/:donationId", async (req,res)=>{

    const donation = await Donation.findById(req.params.donationId);

    const volunteers = await Volunteer.find();
    console.log("Volunteers from DB:", volunteers);
    console.log("Donation:", donation);

    let nearestVolunteer = null;
    let minDistance = 9999;

    volunteers.forEach(v => {

        const dist = haversine(
            donation.latitude,
            donation.longitude,
            v.latitude,
            v.longitude
        );

        if(dist < minDistance){
            minDistance = dist;
            nearestVolunteer = v;
        }

    });

    res.json({
        assignedVolunteer: nearestVolunteer,
        distance: minDistance
    });

});

module.exports = router;