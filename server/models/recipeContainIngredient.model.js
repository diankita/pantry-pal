/**
 * Defines the RecipeContainIngredient model.
 * This is a junction table that manages the many-to-many relationship between Recipes and Ingredients.
 * @param {object} sequelize - Sequelize instance.
 * @param {object} DataTypes - Sequelize data types.
 * @returns The RecipeContainIngredient model.
 */
module.exports = (sequelize, DataTypes) => {
  const RecipeContainIngredient = sequelize.define(
    'RecipeContainIngredient',
    {
      amount: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
      },
      unit: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    { freezeTableName: true }
  );
  RecipeContainIngredient.associate = function (models) {
    RecipeContainIngredient.belongsTo(models.Recipe);
    RecipeContainIngredient.belongsTo(models.Ingredient);
  };
  return RecipeContainIngredient;
};
