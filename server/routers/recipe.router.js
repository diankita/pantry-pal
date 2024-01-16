const express = require('express');
const recipe = require('../controllers/recipe.controller');

const router = express.Router();

router.get('/findByUserInventory/:userId', recipe.findByUserInventory);

router.get('/details/:recipeId', recipe.detailsById);

router.get('/random/', recipe.randomRecipes);

// router.post('/', inventory.addToInventory);

module.exports = router;
