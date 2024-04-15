const express = require('express');
const router = express.Router();
var flightsCtrl = require('../controllers/flights');

// /flights
router.get('/', flightsCtrl.index);
//GET /flights/new
router.get('/new', flightsCtrl.new);
//POST /Movies
router.post('/', flightsCtrl.create);

module.exports = router;
