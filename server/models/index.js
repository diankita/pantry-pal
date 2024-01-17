const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const db = {};

// Set up a new Sequelize instance
const sequelize = new Sequelize(
  process.env.PG_DB,
  process.env.PG_USER,
  process.env.PG_PASSWORD,
  {
    host:  process.env.PG_HOST,
    logging: false,
    dialect: 'postgres',
  }
);

// Read all model files and import them
const files = fs.readdirSync(__dirname);

for (let file of files) {
  if (file !== 'index.js') {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  }
}

// Execute associate methods from models (if any)
for (const model in db) {
  if (db[model].associate) db[model].associate(db);
}

// Export the db object containing all models
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
