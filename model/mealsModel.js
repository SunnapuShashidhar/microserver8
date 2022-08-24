var mongoose = require("mongoose");

const mealsSchema = mongoose.Schema([{
    meal_type: String,
    image: String,
    name: String,
    content: String
}])

const meals = mongoose.model("mealtype", mealsSchema);

module.exports = meals;