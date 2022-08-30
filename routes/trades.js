const express = require('express');
const router = express.Router();
const trades = require('../controllers/trades');

router.post('/', function(req, res, next) {
  trades.addOne(req, res, next);
});

router.get('/', function(req, res, next) {
  trades.getAll(req, res, next);
});

router.get('/:id', function(req, res, next) {
  trades.getOne(req, res, next);
});

router.delete('/:id', function(req, res, next) {
  trades.notAllowed(req, res, next);
});

router.put('/:id', function(req, res, next) {
  trades.notAllowed(req, res, next);
});

router.patch('/:id', function(req, res, next) {
  trades.notAllowed(req, res, next);
});


module.exports = router;
