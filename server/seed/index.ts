import db from '../models/index';
import ingredientsData from './ingredientSeed';
import usersData from './userSeed';
import recipesData from './recipeSeed';

/**
 * Seeds the database with ingredients.
 * Iterates over an array of ingredient objects and inserts them into the database.
 */
async function seedIngredients() {
  try {
    for (const ingredient of ingredientsData) {
      await db.Ingredient.create(ingredient);
    }
    console.log('Ingredients seeded successfully.');
  } catch (error) {
    console.error('Error seeding ingredients:', error);
  }
}

/**
 * Seeds the database with users.
 * Iterates over an array of user objects and inserts them into the database.
 */
async function seedUsers() {
  try {
    for (const user of usersData) {
      await db.User.create(user);
    }
    console.log('Users seeded successfully.');
  } catch (error) {
    console.error('Error seeding ingredients:', error);
  }
}

/**
 * Seeds the database with recipes.
 * Iterates over an array of recipe objects, inserts them into the database,
 * and associates them with their ingredients.
 */
async function seedRecipes() {
  try {
    for (const recipe of recipesData) {
      await db.Recipe.create({
        id: recipe.id,
        title: recipe.title,
        readyInMinutes: recipe.readyInMinutes,
        image: recipe.image,
        summary: recipe.summary,
        instructions: recipe.instructions,
      });

      for (const ingredient of recipe.extendedIngredients) {
        await db.RecipeContainIngredient.create({
          IngredientId: ingredient.id,
          RecipeId: recipe.id,
          amount: ingredient.amount,
          unit: ingredient.unit,

        });
      }
    }
    console.log('Recipes seeded successfully.');
  } catch (error) {
    console.error('Error seeding ingredients:', error);
  }
}

export {
  seedIngredients,
  seedUsers,
  seedRecipes,
};
