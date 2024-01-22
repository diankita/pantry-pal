import dotenv from 'dotenv';
import express, {Express, Request, Response, Application} from 'express';
import cors from 'cors';
import db from './models/index';
import inventoryRouter from './routers/inventory.router';
import ingredientRouter from './routers/ingredient.router';
import recipeRouter from './routers/recipe.router';
import { seedUsers, seedIngredients, seedRecipes } from './seed/index';

dotenv.config();

const app: Application = express();

// Middleware for enabling CORS
app.use(cors());

// Middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// TODO: Replace with proper logging
app.use((req: Request, res: Response, next: Function) => {
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
