const { DataTypes } = require('sequelize');
const sequelize = require('./index.js');

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
