var express = require('express');
var router = express.Router();
var { getRestaurants, addRestaurant, getRestaurantsOnLimit } = require('../controller/restaurantController');

/* GET users listing. */
router.get('/', (req, res, next) => {
    getRestaurants(req, res, next);
});

router.get('/getRestaurants', (req, res, next) => {
    getRestaurants(req, res, next);
});

router.get('/getRestaurantByCity?city=Hyderabad', (req, res, next) => {
    getRestaurantByCity(req, res, next);
});
router.get('/getRestaurantByCity?city=:city&&page=:page&&limit=:limit', (req, res) => {
    getRestaurantsOnLimit(req, res);
})
router.get('/getRestaurantById/:_id', (req, res, next) => {
    getRestaurantById(req, res, next);
});

router.post('/addRestaurant', (req, res, next) => {
    addRestaurant(req, res, next);
});

router.put('/updateRestaurant', (req, res, next) => {
    updateRestaurant(req, res, next);
});

router.delete('/deleteRestaurantByName', (req, res, next) => {
    deleteRestaurantByName(req, res, next);
});
module.exports = router;
