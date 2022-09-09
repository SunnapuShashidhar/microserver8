var express = require('express');
var router = express.Router();
var { getMeals, addMeals } = require('../controller/mealsController');

/* GET users listing. */

router.get('/', (req, res, next) => {
    getMeals(req, res, next);
});

router.get('/getMeals', (req, res, next) => {
    getMeals(req, res, next);
});

router.post('/addMeal', (req, res, next) => {
    addMeals(req, res, next);
});

module.exports = router;
