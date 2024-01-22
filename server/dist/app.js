"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./models/index');
const inventoryRouter = require('./routers/inventory.router');
const ingredientRouter = require('./routers/ingredient.router.js');
const recipeRouter = require('./routers/recipe.router.js');
const { seedUsers, seedIngredients, seedRecipes } = require('./seed/index.js');
const app = express();
// Middleware for enabling CORS
app.use(cors());
// Middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// TODO: Replace with proper logging
app.use((req, res, next) => {
    next();
});
// TODO: Add unified error handling middleware
// Route Setup
app.use('/inventory', inventoryRouter);
app.use('/ingredient', ingredientRouter);
app.use('/recipe', recipeRouter);
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db.sequelize.sync();
        // For dropping and starting over for any changes in database schema and repopulate the database
        yield db.sequelize.sync({ force: true });
        yield seedUsers();
        yield seedIngredients();
        yield seedRecipes();
        console.log('Database synced successfully.');
        const PORT = process.env.PORT || 3001;
        app.listen(PORT, console.log(`Server started on port ${PORT}`));
    }
    catch (error) {
        console.error('Unable to sync the database:', error);
        process.exit(1);
    }
}))();
