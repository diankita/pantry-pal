require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./models/index');
const inventoryRouter = require('./routers/inventory.router');
const ingredientRouter = require('./routers/ingredient.router.js');
const recipeRouter = require('./routers/recipe.router.js');
const {seedUsers, seedIngredients, seedRecipes} = require('./seed/index.js');

const app = express();

// Middleware for enabling CORS
app.use(cors());

// Middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// TODO: Replace with proper logging
app.use((req, res, next) => {
  console.log('Requested at: ', Date.now());
  next();
});
// TODO: Add unified error handling middleware

// Route Setup
app.use('/inventory', inventoryRouter);
app.use('/ingredient', ingredientRouter);
app.use('/recipe', recipeRouter);

(async () => {
  try {
    await db.sequelize.sync();

    // For dropping and starting over for any changes in database schema and repopulate the database
    await db.sequelize.sync({force: true});
    await seedUsers();
    await seedIngredients();
    await seedRecipes();

    console.log('Database synced successfully.');
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.error('Unable to sync the database:', error);
    process.exit(1);
  }
})();
