require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./models/index');
const inventoryRouter = require('./routers/inventory.router');
const ingredientRouter = require('./routers/ingredient.router.js');
const recipeRouter = require('./routers/recipe.router.js');
const { seedUsers, seedIngredients, seedRecipes } = require('./seed/index.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log('Requested at: ', Date.now());
  next();
});
// Example route setup
app.use('/inventory', inventoryRouter);
app.use('/ingredient', ingredientRouter);
app.use('/recipe', recipeRouter);

// TODO unified error handling
// app.use((err, req, res, next) => {
//   return res.status(500).json({
//     status: 'error',
//     message: err.message,
//     path: req.path
//   });
// });

(async () => {
  try {
    await db.sequelize.sync();
    // await db.sequelize.sync({ force: true });

    // await seedUsers();
    // await seedIngredients();
    // await seedRecipes();

    console.log('Database synced successfully.');
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.error('Unable to sync the database:', error);
    // Handle error appropriately - maybe exit process
    process.exit(1);
  }
})();
