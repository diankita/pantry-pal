const db = require('../models');

exports.findByUserInventory = async (req, res) => {
  try {
    const userId = req.params.userId;

    let inventoryList = await db.Inventory.findAll({
      where: { UserId: userId },
      include: db.Ingredient
    });
    const ingredientNameList = inventoryList.map(item => item.Ingredient.name).join(',');

    const response = await fetch(
      `https://${process.env.FOOD_API_URL}/recipes/findByIngredients?ingredients=${ingredientNameList}&number=10&ignorePantry=true&ranking=2`,
      {
        headers: {
          'X-RapidAPI-Key': process.env.FOOD_API_KEY,
          'X-RapidAPI-Host': process.env.FOOD_API_URL,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from the external API');
  }
};
