/**
 * Defines the Recipe model.
 * Recipes can be associated with multiple Ingredients through the RecipeContainIngredient model.
 * @param {object} sequelize - Sequelize instance.
 * @param {object} DataTypes - Sequelize data types.
 * @returns The Recipe model.
 */
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define(
    'Recipe',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      readyInMinutes: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING, // Increased length for URLs
        allowNull: true // Assuming image is optional
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      instructions: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    { freezeTableName: true }
  );

  Recipe.associate = function (models) {
    Recipe.belongsToMany(models.Ingredient, {
      through: models.RecipeContainIngredient,
    });
    Recipe.hasMany(models.RecipeContainIngredient);
  };

  return Recipe;
};
