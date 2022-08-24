var mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema([{
    name: String,
    description: String,
    address: String,
    location: String,
    image: String,
    cuisine: String,
    min_price: String,
    contact: String,
    locality: String,
    city: String
}])

module.exports = mongoose.model("restaurants", restaurantSchema);