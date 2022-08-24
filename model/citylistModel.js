var mongoose = require("mongoose");

const citylistSchema = mongoose.Schema([{
    location_id: String,
    name: String,
    city: String
}])



module.exports =  mongoose.model('cityList', citylistSchema);