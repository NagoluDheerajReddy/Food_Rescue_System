const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema({

donor_id:String,
food_type:String,
quantity:Number,
location:String,
latitude:Number,
longitude:Number,
expiry_time:Date,
status:{type:String,default:"Pending"}

});

const Donation = mongoose.model("Donation", DonationSchema);

module.exports = Donation;