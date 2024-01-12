const express = require('express');
const inventory = require('../controllers/inventory.controller');

const router = express.Router();

router.get('/', inventory.getAllInventory);

router.post('/', inventory.addToInventory);

module.exports = router;
