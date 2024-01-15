const express = require('express');
const recipe = require('../controllers/recipe.controller');

const router = express.Router();

router.get('/findByUserInventory/:userId', recipe.findByUserInventory);

// router.post('/', inventory.addToInventory);

module.exports = router;
