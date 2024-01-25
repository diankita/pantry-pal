import { InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { Sequelize, DataType } from 'sequelize-typescript';

interface IInventory
  extends Model<
    InferAttributes<IInventory>,
    InferCreationAttributes<IInventory>
  > {
  associate: (models: any) => void;
}
/**
 * Defines the Inventory model.
 * This is a junction table that manages the many-to-many relationship between Users and Ingredients.
 * @param {object} sequelize - Sequelize instance.
 * @param {object} DataTypes - Sequelize data types.
 * @returns The Inventory model.
 */
export default (sequelize: Sequelize, DataTypes: typeof DataType) => {
  const Inventory = sequelize.define<IInventory>(
    'Inventory',
    {},
    { freezeTableName: true }
  );
  (Inventory as unknown as IInventory).associate = function (models) {
    Inventory.belongsTo(models.User);
    Inventory.belongsTo(models.Ingredient);
  };
  return Inventory;
};
