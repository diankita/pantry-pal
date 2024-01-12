const db = require('../models');

exports.addToInventory = async (req, res) => {
  try {
    const { userId, ingredient } = req.body;

    // Start a transaction
    const transaction = await db.sequelize.transaction();

    // Check if User exist
    const user = await db.User.findByPk(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }

    // Check if the selected ingredient exists
    let ingredientFromLocalDB = await db.Ingredient.findByPk(ingredient.id);
    // If Not exists, Add Ingredient to Ingredient Table
    if (!ingredientFromLocalDB) {
      ingredientFromLocalDB = await db.Ingredient.create({
        id: ingredient.id,
        name: ingredient.name,
        image: ingredient.image,
        aisle: ingredient.aisle,
        // possibleUnits: JSON.stringify(ingredient.possibleUnits),
      });
    }

    // Add Ingredient to User's Inventory
    await db.Inventory.create({
      IngredientId: ingredientFromLocalDB.id,
      UserId: userId,
    });

    // Commit the transaction if no errors when reach here
    await transaction.commit();
    res.status(201).json(ingredientFromLocalDB);
  } catch (error) {
    await transaction.rollback();
    console.error(error);
    res.status(500).send('Error saving to inventory');
  }
};

exports.getAllInventory = async (req, res) => {
  console.log('asldfas');
};
