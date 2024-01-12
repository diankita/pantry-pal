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
    Ingredient.belongsToMany(models.User, {
      through: models.Inventory,
    });
    Ingredient.hasMany(models.Inventory);
  };

  return Ingredient;
};
