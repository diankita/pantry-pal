const { DataTypes } = require('sequelize');
const sequelize = require('./index.js');

function inventoryModel(sequelize, DataTypes) {
  return sequelize.define(
    'Inventory',
    {
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ingredientId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { freezeTableName: true }
  );
}

module.exports = inventoryModel;
