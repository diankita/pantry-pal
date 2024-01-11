const express = require('express');
const cors = require('cors');
const inventoryRouter = require('./routers/inventory.router');
const db = require('./models/index');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log('Requested at: ', Date.now());
  next();
});
// Example route setup
app.use('/inventory', inventoryRouter);

// // Database connection
// sequelize
//   .authenticate()
//   .then(() => console.log('Database connected...'))
//   .catch((err) => console.log('Error: ' + err));

(async () => {
    try {
      await db.sequelize.sync();
      console.log('Database synced successfully.');
      const PORT = process.env.PORT || 3000;
      app.listen(PORT, console.log(`Server started on port ${PORT}`));
    } catch (error) {
      console.error('Unable to sync the database:', error);
      // Handle error appropriately - maybe exit process
      process.exit(1);
    }
  })();