module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define(
    'Ingredient',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING, // assuming URL or filename
        allowNull: true,
      },
      aisle: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      // possibleUnits: {
      //   type: DataTypes.JSONB,
      //   allowNull: true,
      // },
    },
    { freezeTableName: true }
  );

  Ingredient.associate = function (models) {
    // Link to User
    Ingredient.belongsToMany(models.User, {
      through: models.Inventory,
    });
    Ingredient.hasMany(models.Inventory);

    // Link to Recipe
    Ingredient.belongsToMany(models.Recipe, {
      through: models.RecipeContainIngredient,
    });
    Ingredient.hasMany(models.RecipeContainIngredient);
  };

  return Ingredient;
};
