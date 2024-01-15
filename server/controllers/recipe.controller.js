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
          COUNT(DISTINCT ri."IngredientId") AS matching_ingredients,
          (SELECT COUNT(DISTINCT "IngredientId") FROM public."RecipeContainIngredient" WHERE "RecipeId" = r.id) - COUNT(DISTINCT ri."IngredientId") AS missing_ingredients
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
          missing_ingredients ASC, matching_ingredients DESC`,
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
