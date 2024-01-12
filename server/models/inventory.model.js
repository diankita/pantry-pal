const { DataTypes } = require('sequelize');
const sequelize = require('./index.js');

function inventoryModel(sequelize, DataTypes) {
  const Inventory = sequelize.define(
    'Inventory',
    {
      // ingredientId: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: 'Ingredient',
      //     key: 'ingredientId',
      //   },
      // },
      // userId: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: 'User',
      //     key: 'userId',
      //   },
      // },
    },
    { freezeTableName: true }
  );
  Inventory.associate = function (models) {
    Inventory.belongsTo(models.User);
    Inventory.belongsTo(models.Ingredient);
  };
  return Inventory;
}

module.exports = inventoryModel;
