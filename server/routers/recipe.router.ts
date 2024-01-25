import express from 'express';
import {
  findByUserInventory,
  detailsById,
  randomRecipes,
} from '../controllers/recipe.controller';

const router = express.Router();
console.log(typeof router);

router.get('/findByUserInventory/:userId', findByUserInventory);

router.get('/details/:recipeId', detailsById);

router.get('/random/', randomRecipes);

export default router;
