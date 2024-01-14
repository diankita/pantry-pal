const express = require('express');
const recipe = require('../controllers/recipe.controller');

const router = express.Router();

router.get('/findByIngredient', recipe.findByIngredient);

// router.post('/', inventory.addToInventory);

module.exports = router;
