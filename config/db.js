const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/food_rescue")
.then(()=>{
    console.log("MongoDB Connected Successfully");
})
.catch(err => console.log(err));

module.exports = mongoose;