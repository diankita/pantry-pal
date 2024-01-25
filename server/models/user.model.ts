import { InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { Sequelize, DataType } from 'sequelize-typescript';

interface IUser
  extends Model<InferAttributes<IUser>, InferCreationAttributes<IUser>> {
  associate: (models: any) => void;
  id: number;
  name: string;
  email: string;
  password: string;
}

/**
 * Defines the User model.
 * Users can have multiple Ingredients in their Inventory.
 * @param {object} sequelize - Sequelize instance.
 * @param {object} DataTypes - Sequelize data types.
 * @returns The User model.
 */
export default (sequelize: Sequelize, DataTypes: typeof DataType) => {
  const User = sequelize.define<IUser>(
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

  (User as unknown as IUser).associate = function (models) {
    User.belongsToMany(models.Ingredient, {
      through: models.Inventory,
    });
    User.hasMany(models.Inventory);
  };

  return User;
};
