const db = require('../models/index');
const ingredientsData = require('./ingredientSeed');
const usersData = require('./userSeed');
const recipesData = require('./recipeSeed');

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

async function seedRecipes() {
  try {
    for (const recipe of recipesData) {
      // await db.User.create(user);
      await db.Recipe.create({
        id: recipe.id,
        title: recipe.title,
        readyInMinutes: recipe.readyInMinutes,
        image: recipe.image,
        summary: recipe.summary,
        instructions: recipe.instructions,
      });

      // console.log(recipe.extendedIngredients)
      for (const ingredient of recipe.extendedIngredients) {
        // console.log(recipe.id, ingredient.id)
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

module.exports = {
  seedIngredients,
  seedUsers,
  seedRecipes,
};
