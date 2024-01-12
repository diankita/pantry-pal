const db = require('../models');

exports.autocomplete = async (req, res) => {
  try {
    const query = req.query.query;
    // const response = await fetch(
    //   `https://${process.env.FOOD_API_URL}/food/ingredients/autocomplete?query=${query}&number=10`,
    //   {
    //     headers: {
    //       'X-RapidAPI-Key':
    //         process.env.FOOD_API_KEY,
    //       'X-RapidAPI-Host':
    //         process.env.FOOD_API_URL,
    //     },
    //   }
    // );

    // if (!response.ok) {
    //   throw new Error('Network response was not ok');
    // }

    // const data = await response.json();
    // res.send(data);
    const mockData = [
      { name: 'apple', image: 'apple.jpg' },
      { name: 'applesauce', image: 'applesauce.png' },
      { name: 'apple juice', image: 'apple-juice.jpg' },
      { name: 'apple cider', image: 'apple-cider.jpg' },
      { name: 'apple jelly', image: 'apple-jelly.jpg' },
      { name: 'apple butter', image: 'apple-jelly.jpg' },
      { name: 'apple pie spice', image: 'garam-masala.jpg' },
      { name: 'apple pie filling', image: 'apple-pie-slice.jpg' },
      { name: 'apple cider vinegar', image: 'apple-cider-vinegar.jpg' },
      { name: 'applewood smoked bacon', image: 'raw-bacon.png' },
    ];
    res.send(mockData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from the external API');
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
          'X-RapidAPI-Key':
            process.env.FOOD_API_KEY,
          'X-RapidAPI-Host':
            process.env.FOOD_API_URL,
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
