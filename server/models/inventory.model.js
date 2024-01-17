/**
 * Defines the Inventory model.
 * This is a junction table that manages the many-to-many relationship between Users and Ingredients.
 * @param {object} sequelize - Sequelize instance.
 * @param {object} DataTypes - Sequelize data types.
 * @returns The Inventory model.
 */
module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define(
    'Inventory',
    {},
    { freezeTableName: true }
  );
  Inventory.associate = function (models) {
    Inventory.belongsTo(models.User);
    Inventory.belongsTo(models.Ingredient);
  };
  return Inventory;
};
