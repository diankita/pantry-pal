import { InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { Sequelize, DataType } from 'sequelize-typescript';

interface IRecipeContainIngredient
  extends Model<
    InferAttributes<IRecipeContainIngredient>,
    InferCreationAttributes<IRecipeContainIngredient>
  > {
  associate: (models: any) => void;
  amount: number;
  unit: string;
}

/**
 * Defines the RecipeContainIngredient model.
 * This is a junction table that manages the many-to-many relationship between Recipes and Ingredients.
 * @param {object} sequelize - Sequelize instance.
 * @param {object} DataTypes - Sequelize data types.
 * @returns The RecipeContainIngredient model.
 */
export default (sequelize: Sequelize, DataTypes: typeof DataType) => {
  const RecipeContainIngredient = sequelize.define<IRecipeContainIngredient>(
    'RecipeContainIngredient',
    {
      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      unit: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { freezeTableName: true }
  );
  (RecipeContainIngredient as unknown as IRecipeContainIngredient).associate =
    function (models) {
      RecipeContainIngredient.belongsTo(models.Recipe);
      RecipeContainIngredient.belongsTo(models.Ingredient);
    };
  return RecipeContainIngredient;
};
