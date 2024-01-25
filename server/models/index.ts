import { Sequelize, ModelCtor } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import fs from 'fs';
import path from 'path';
import { InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import inventoryModelFunction from './inventory.model';
import ingredientModelFunction from './ingredient.model';
import recipeModelFunction from './recipe.model';
import recipeContainIngredientModelFunction from './recipeContainIngredient.model';
import userModelFunction from './user.model';

interface IIngredient
  extends Model<
    InferAttributes<IIngredient>,
    InferCreationAttributes<IIngredient>
  > {
  associate: (models: any) => void;
  id: number;
  name: string;
  image: string;
  aisle: string;
}

// type IModel = ModelCtor<Model<any, any>> & {
//   // name: string;
//   associate: (db: IDB) => void;
//   // findAll: (options?: any) => Promise<any>;
// };

type IDB = { [key: string]: any } & {
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
  // Ingredient: ModelCtor<any>;
};
const db = {} as IDB;

const dbConfig = {
  dbName: process.env.PG_DB || 'test',
  dbUser: process.env.PG_USER || 'test',
  dbPW: process.env.PG_PASSWORD || 'test',
};

// Set up a new Sequelize instance
const sequelize = new Sequelize(
  dbConfig.dbName,
  dbConfig.dbUser,
  dbConfig.dbPW,
  {
    host: process.env.PG_HOST,
    logging: false,
    dialect: 'postgres',
  }
);

// Read all model files and import them
// const files = fs.readdirSync(__dirname);

const ingredientModel = ingredientModelFunction(sequelize, DataTypes);
db.Ingredient = ingredientModel;
const inventoryModel = inventoryModelFunction(sequelize, DataTypes);
db.Inventory = inventoryModel;
const RecipeModel = recipeModelFunction(sequelize, DataTypes);
db.Recipe = RecipeModel;
const RecipeContainingIngredientModel = recipeContainIngredientModelFunction(
  sequelize,
  DataTypes
);
db.RecipeContainingIngredient = RecipeContainingIngredientModel;
const UserModel = userModelFunction(sequelize, DataTypes);
db.User = UserModel;

// for (let file of files) {
//   if (file !== 'index.ts') {
//     // const model = require(path.join(__dirname, file))(sequelize, DataTypes);
//     const model = await import(path.join(__dirname, file));
//     db[model.name] = model;
//   }
// }

// Execute associate methods from models (if any)
for (const model in db) {
  if (model in db && 'associate' in db[model]) {
    db[model].associate(db);
  }
}

// Export the db object containing all models
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
