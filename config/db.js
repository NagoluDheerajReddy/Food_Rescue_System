const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin123@foodrescuecluster.hw6hwnm.mongodb.net/foodrescueDB")
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((err) => {
    console.log("MongoDB Connection Error:", err);
});
