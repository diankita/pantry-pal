const db = require('../models');

exports.autocomplete = async (req, res) => {
  try {
    const query = req.query.query;
    const ingredients = await db.Ingredient.findAll({
      where: {
        name: {
          [db.Sequelize.Op.like]: `%${query}%`, // Search for any match within the name field
        },
      },
      limit: 10, // Limit the results to 10
    });

    return res.status(200).json(ingredients);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: 'Error fetching data from the external API' });
  }
};

exports.search = async (req, res) => {
  // TODO use a unified error handling
  // TODO use a unified fetch to make things uniform and reusable
  try {
    const query = req.query.query;
    const response = await fetch(
      `https://${process.env.FOOD_API_URL}/food/ingredients/search?query=${query}&addChildren=true&metaInformation=true&offset=0&number=1`,
      {
        headers: {
          'X-RapidAPI-Key': process.env.FOOD_API_KEY,
          'X-RapidAPI-Host': process.env.FOOD_API_URL,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from the external API');
  }
};
