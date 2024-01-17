/**
 * Defines the User model.
 * Users can have multiple Ingredients in their Inventory.
 * @param {object} sequelize - Sequelize instance.
 * @param {object} DataTypes - Sequelize data types.
 * @returns The User model.
 */
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(255),
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    { freezeTableName: true }
  );

  User.associate = function (models) {
    User.belongsToMany(models.Ingredient, {
      through: models.Inventory,
    });
    User.hasMany(models.Inventory);
  };

  return User;
};
