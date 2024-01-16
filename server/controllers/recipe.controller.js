const db = require('../models');

exports.findByUserInventory = async (req, res) => {
  try {
    const userId = req.params.userId;

    const userInventory = await db.Inventory.findAll({
      where: { UserId: userId },
    });
    const userIngredientIds = userInventory.map((item) => item.IngredientId);

    // Get all recipes that matches user's inventory and sort by least number of missing ingredients first
    const recipes = await db.sequelize.query(
      `SELECT
          r.*,
          COUNT(DISTINCT ri."IngredientId") AS "matchingIngredients",
          (SELECT COUNT(DISTINCT "IngredientId") FROM public."RecipeContainIngredient" WHERE "RecipeId" = r.id) - COUNT(DISTINCT ri."IngredientId") AS "missingIngredients"
       FROM
          public."Recipe" r
       JOIN
          public."RecipeContainIngredient" ri ON r.id = ri."RecipeId"
       JOIN
          public."Inventory" i ON ri."IngredientId" = i."IngredientId"
       WHERE
          i."UserId" = :userId
       GROUP BY
          r.id, r.title
       ORDER BY
          "missingIngredients" ASC, "matchingIngredients" DESC`,
      {
        replacements: { userId: userId },
        type: db.Sequelize.QueryTypes.SELECT,
      }
    );
    // console.log(recipes);
    res.send(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from the external API');
  }
};

exports.detailsById = async (req, res) => {
  try {
    const recipeId = req.params.recipeId;

    const recipeDetails = await db.Recipe.findByPk(recipeId, {
      include: [
        {
          model: db.RecipeContainIngredient,
          attributes: ['amount', 'unit'], // Include amount and unit
          include: [
            {
              model: db.Ingredient,
              attributes: ['id', 'name', 'image', 'aisle'], // Include desired attributes from Ingredient
            },
          ],
        },
      ],
    });

    // Convert Sequelize instance to plain object
    const recipeDetailsPlain = recipeDetails.get({ plain: true });

    // Remove the original RecipeContainIngredients
    delete recipeDetailsPlain.RecipeContainIngredients;
    // Restructure the response
    const restructuredRecipeDetails = {
      ...recipeDetailsPlain,
      ingredients: recipeDetails.RecipeContainIngredients.map((rci) => ({
        amount: rci.amount,
        unit: rci.unit,
        id: rci.Ingredient.id,
        name: rci.Ingredient.name,
        image: rci.Ingredient.image,
        aisle: rci.Ingredient.aisle,
      })),
    };
    res.send(restructuredRecipeDetails);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from the external API');
  }
};

exports.randomRecipes = async (req, res) => {
  try {
    // Fetch 10 random recipes from the database
    const randomRecipes = await db.Recipe.findAll({
      order: db.sequelize.random(), // Order by random
      limit: 5, // Limit to 5 results
    });
    res.send(randomRecipes);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from the external API');
  }
};
