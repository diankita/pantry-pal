module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define(
    'Ingredient',
    {
      ingredientId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      ingredientName: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    { freezeTableName: true }
  );

  Ingredient.associate = function (models) {
    Ingredient.belongsToMany(models.User, {
      through: models.Inventory,
    });
    Ingredient.hasMany(models.Inventory);
  };

  return Ingredient;
};
