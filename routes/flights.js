const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

// /flights
router.get('/', flightsCtrl.index);
//GET /flights/new
router.get('/new', flightsCtrl.new);
// GET /flights/:id (Show)
router.get('/:id', flightsCtrl.show);
//POST /Movies
router.post('/', flightsCtrl.create);

module.exports = router;
