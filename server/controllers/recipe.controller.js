const db = require('../models');

exports.findByUserInventory = async (req, res) => {
  try {
    const userId = req.params.userId;

    let inventoryList = await db.Inventory.findAll({
      where: { UserId: userId },
      include: db.Ingredient,
    });
    const ingredientNameList = inventoryList
      .map((item) => item.Ingredient.name)
      .join(',');

    // const response = await fetch(
    //   `https://${process.env.FOOD_API_URL}/recipes/findByIngredients?ingredients=${ingredientNameList}&number=10&ignorePantry=true&ranking=2`,
    //   {
    //     headers: {
    //       'X-RapidAPI-Key': process.env.FOOD_API_KEY,
    //       'X-RapidAPI-Host': process.env.FOOD_API_URL,
    //     },
    //   }
    // );

    // if (!response.ok) {
    //   throw new Error('Network response was not ok');
    // }
    // const data = await response.json();
    // res.send(data);
    const mockData = [
      {
        id: 560632,
        title: 'Bacon Wrapped Dates',
        image: 'https://spoonacular.com/recipeImages/560632-312x231.jpg',
        imageType: 'jpg',
        usedIngredientCount: 1,
        missedIngredientCount: 2,
        missedIngredients: [
          {
            id: 1004,
            amount: 4,
            unit: 'oz',
            unitLong: 'ounces',
            unitShort: 'oz',
            aisle: 'Cheese',
            name: 'cheese',
            original: '4 oz blue cheese',
            originalName: 'blue cheese',
            meta: ['blue'],
            extendedName: 'blue cheese',
            image:
              'https://spoonacular.com/cdn/ingredients_100x100/blue-cheese.png',
          },
          {
            id: 9087,
            amount: 20,
            unit: '',
            unitLong: '',
            unitShort: '',
            aisle: 'Dried Fruits',
            name: 'dates',
            original: '20 dates',
            originalName: 'dates',
            meta: [],
            image: 'https://spoonacular.com/cdn/ingredients_100x100/dates.jpg',
          },
        ],
        usedIngredients: [
          {
            id: 10123,
            amount: 10,
            unit: 'slices',
            unitLong: 'slices',
            unitShort: 'slice',
            aisle: 'Meat',
            name: 'bacon',
            original: '10 slices bacon',
            originalName: 'bacon',
            meta: [],
            image:
              'https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png',
          },
        ],
        unusedIngredients: [],
        likes: 779,
      },
      {
        id: 688200,
        title: 'Bacon Wrapped Cream Cheese Crackers',
        image: 'https://spoonacular.com/recipeImages/688200-312x231.jpg',
        imageType: 'jpg',
        usedIngredientCount: 1,
        missedIngredientCount: 2,
        missedIngredients: [
          {
            id: 18621,
            amount: 60,
            unit: '',
            unitLong: '',
            unitShort: '',
            aisle: 'Savory Snacks',
            name: 'club crackers',
            original: '60 Club Crackers (about 2 sleeves)',
            originalName: 'Club Crackers (about 2 sleeves)',
            meta: ['( 2 sleeves)'],
            image:
              'https://spoonacular.com/cdn/ingredients_100x100/crackers.jpg',
          },
          {
            id: 1017,
            amount: 8,
            unit: 'oz',
            unitLong: 'ounces',
            unitShort: 'oz',
            aisle: 'Cheese',
            name: 'block of cream cheese',
            original:
              '1 (8 oz.) block of cream cheese, softened (reduced fat is fine)',
            originalName:
              'block of cream cheese, softened (reduced fat is fine)',
            meta: ['softened', 'fine', '(reduced fat is )'],
            image:
              'https://spoonacular.com/cdn/ingredients_100x100/cream-cheese.jpg',
          },
        ],
        usedIngredients: [
          {
            id: 10123,
            amount: 2,
            unit: 'lbs',
            unitLong: 'pounds',
            unitShort: 'lb',
            aisle: 'Meat',
            name: 'bacon',
            original: "2 lbs of bacon (just regular, don't use the thick cut)",
            originalName: "bacon (just regular, don't use the thick cut)",
            meta: ['thick cut', "(just regular, don't use the )"],
            image:
              'https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png',
          },
        ],
        unusedIngredients: [],
        likes: 75,
      },
      {
        id: 527972,
        title: 'Bacon Stuffed Chicken',
        image: 'https://spoonacular.com/recipeImages/527972-312x231.jpg',
        imageType: 'jpg',
        usedIngredientCount: 1,
        missedIngredientCount: 2,
        missedIngredients: [
          {
            id: 1001025,
            amount: 1,
            unit: 'cup',
            unitLong: 'cup',
            unitShort: 'cup',
            aisle: 'Cheese',
            name: 'monterrey jack cheese',
            original: '1 cup Monterrey Jack cheese, grated',
            originalName: 'Monterrey Jack cheese, grated',
            meta: ['grated'],
            image:
              'https://spoonacular.com/cdn/ingredients_100x100/shredded-cheese-white.jpg',
          },
          {
            id: 1055062,
            amount: 4,
            unit: '',
            unitLong: '',
            unitShort: '',
            aisle: 'Meat',
            name: 'chicken breasts',
            original: '4 boneless, skinless chicken breasts',
            originalName: 'boneless, skinless chicken breasts',
            meta: ['boneless', 'skinless'],
            extendedName: 'skinless boneless chicken breasts',
            image:
              'https://spoonacular.com/cdn/ingredients_100x100/chicken-breasts.png',
          },
        ],
        usedIngredients: [
          {
            id: 10123,
            amount: 4,
            unit: 'slices',
            unitLong: 'slices',
            unitShort: 'slice',
            aisle: 'Meat',
            name: 'farmer john mild jalapeno bacon',
            original: '4 slices Farmer John Mild Jalapeno Bacon',
            originalName: 'Farmer John Mild Jalapeno Bacon',
            meta: [],
            image:
              'https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png',
          },
        ],
        unusedIngredients: [],
        likes: 67,
      },
      {
        id: 527578,
        title: 'Bacon-Wrapped Blue Cheese Stuffed Dates',
        image: 'https://spoonacular.com/recipeImages/527578-312x231.jpg',
        imageType: 'jpg',
        usedIngredientCount: 1,
        missedIngredientCount: 2,
        missedIngredients: [
          {
            id: 1004,
            amount: 4,
            unit: 'oz',
            unitLong: 'ounces',
            unitShort: 'oz',
            aisle: 'Cheese',
            name: 'cheese',
            original: '1 (4 oz.) container crumbled blue cheese',
            originalName: 'crumbled blue cheese',
            meta: ['blue', 'crumbled'],
            extendedName: 'blue cheese',
            image:
              'https://spoonacular.com/cdn/ingredients_100x100/blue-cheese.png',
          },
          {
            id: 9087,
            amount: 8,
            unit: 'oz',
            unitLong: 'ounces',
            unitShort: 'oz',
            aisle: 'Dried Fruits',
            name: 'dates',
            original:
              '1 (8 oz.) package of dried, pitted dates (about 30 dates)',
            originalName: 'package of dried, pitted dates (about 30 dates)',
            meta: ['dried', 'pitted', '( 30 dates)'],
            extendedName: 'dried dates',
            image: 'https://spoonacular.com/cdn/ingredients_100x100/dates.jpg',
          },
        ],
        usedIngredients: [
          {
            id: 10123,
            amount: 12,
            unit: 'oz',
            unitLong: 'ounces',
            unitShort: 'oz',
            aisle: 'Meat',
            name: 'bacon',
            original:
              '1 (12 oz.) package bacon, with the slices cut into thirds',
            originalName: 'package bacon, with the slices cut into thirds',
            meta: ['with the slices cut into thirds'],
            image:
              'https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png',
          },
        ],
        unusedIngredients: [],
        likes: 66,
      },
      {
        id: 690738,
        title: 'Bacon-Wrapped Teriyaki Pork Bites',
        image: 'https://spoonacular.com/recipeImages/690738-312x231.jpg',
        imageType: 'jpg',
        usedIngredientCount: 1,
        missedIngredientCount: 2,
        missedIngredients: [
          {
            id: 10218,
            amount: 18,
            unit: 'ounces',
            unitLong: 'ounces',
            unitShort: 'oz',
            aisle: 'Meat',
            name: 'smithfield teriyaki marinated pork tenderloin',
            original:
              '18 ounces Smithfield Teriyaki Marinated Fresh Pork Tenderloin',
            originalName: 'Smithfield Teriyaki Marinated Fresh Pork Tenderloin',
            meta: ['fresh'],
            extendedName: 'fresh smithfield teriyaki marinated pork tenderloin',
            image:
              'https://spoonacular.com/cdn/ingredients_100x100/pork-tenderloin-raw.png',
          },
          {
            id: 6112,
            amount: 1,
            unit: 'cup',
            unitLong: 'cup',
            unitShort: 'cup',
            aisle: 'Condiments',
            name: 'teriyaki basting sauce',
            original: '1 cup prepared teriyaki basting sauce',
            originalName: 'prepared teriyaki basting sauce',
            meta: ['prepared'],
            extendedName: 'cooked teriyaki basting sauce',
            image:
              'https://spoonacular.com/cdn/ingredients_100x100/dark-sauce.jpg',
          },
        ],
        usedIngredients: [
          {
            id: 10123,
            amount: 16,
            unit: 'ounces',
            unitLong: 'ounces',
            unitShort: 'oz',
            aisle: 'Meat',
            name: 'smithfield bacon',
            original: '16 ounces Smithfield bacon',
            originalName: 'Smithfield bacon',
            meta: [],
            image:
              'https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png',
          },
        ],
        unusedIngredients: [],
        likes: 36,
      },
      {
        id: 526045,
        title: 'Balsamic Glazed Bacon Wrapped Dates',
        image: 'https://spoonacular.com/recipeImages/526045-312x231.jpg',
        imageType: 'jpg',
        usedIngredientCount: 1,
        missedIngredientCount: 2,
        missedIngredients: [
          {
            id: 2069,
            amount: 16,
            unit: 'servings',
            unitLong: 'servings',
            unitShort: 'servings',
            aisle: 'Oil, Vinegar, Salad Dressing',
            name: 'balsamic vinegar',
            original: 'Balsamic vinegar',
            originalName: 'Balsamic vinegar',
            meta: [],
            image:
              'https://spoonacular.com/cdn/ingredients_100x100/balsamic-vinegar.jpg',
          },
          {
            id: 9087,
            amount: 16,
            unit: '',
            unitLong: '',
            unitShort: '',
            aisle: 'Dried Fruits',
            name: 'dates',
            original: '16 Pitted dates',
            originalName: 'Pitted dates',
            meta: ['pitted'],
            image: 'https://spoonacular.com/cdn/ingredients_100x100/dates.jpg',
          },
        ],
        usedIngredients: [
          {
            id: 10123,
            amount: 4,
            unit: 'slices',
            unitLong: 'slices',
            unitShort: 'slice',
            aisle: 'Meat',
            name: 'bacon',
            original: '4 slices of thick bacon (uncured, no nitrates is best!)',
            originalName: 'thick bacon (uncured, no nitrates is best!)',
            meta: ['thick', '(uncured, no nitrates is best!)'],
            image:
              'https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png',
          },
        ],
        unusedIngredients: [],
        likes: 7,
      },
      {
        id: 625013,
        title:
          'Bacon Jalapeño Poppers | When the Game Stands Tall Family Movie Night',
        image: 'https://spoonacular.com/recipeImages/625013-312x231.jpg',
        imageType: 'jpg',
        usedIngredientCount: 1,
        missedIngredientCount: 2,
        missedIngredients: [
          {
            id: 93748,
            amount: 0.5,
            unit: 'cup',
            unitLong: 'cups',
            unitShort: 'cup',
            aisle: 'Cheese',
            name: 'philadelphia chive & onion cream cheese',
            original: '1/2 cup Philadelphia Chive & Onion Cream Cheese',
            originalName: 'Philadelphia Chive & Onion Cream Cheese',
            meta: [],
            image:
              'https://spoonacular.com/cdn/ingredients_100x100/green-onion-cream-cheese-dip.jpg',
          },
          {
            id: 11979,
            amount: 6,
            unit: '',
            unitLong: '',
            unitShort: '',
            aisle: 'Canned and Jarred',
            name: 'jalapeno chiles',
            original: '6 jalapeno chiles',
            originalName: 'jalapeno chiles',
            meta: [],
            image:
              'https://spoonacular.com/cdn/ingredients_100x100/jalapeno-pepper.png',
          },
        ],
        usedIngredients: [
          {
            id: 10123,
            amount: 6,
            unit: 'slices',
            unitLong: 'slices',
            unitShort: 'slice',
            aisle: 'Meat',
            name: 'regular bacon',
            original: '6 slices regular bacon',
            originalName: 'regular bacon',
            meta: [],
            image:
              'https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png',
          },
        ],
        unusedIngredients: [],
        likes: 5,
      },
      {
        id: 426130,
        title: 'Mushroom Bacon Bites',
        image: 'https://spoonacular.com/recipeImages/426130-312x231.jpg',
        imageType: 'jpg',
        usedIngredientCount: 1,
        missedIngredientCount: 2,
        missedIngredients: [
          {
            id: 6150,
            amount: 1,
            unit: 'cup',
            unitLong: 'cup',
            unitShort: 'cup',
            aisle: 'Condiments',
            name: 'barbecue sauce',
            original: '1 cup barbecue sauce',
            originalName: 'barbecue sauce',
            meta: [],
            image:
              'https://spoonacular.com/cdn/ingredients_100x100/barbecue-sauce.jpg',
          },
          {
            id: 11260,
            amount: 24,
            unit: 'medium',
            unitLong: 'mediums',
            unitShort: 'medium',
            aisle: 'Produce',
            name: 'mushrooms',
            original: '24 medium fresh mushrooms',
            originalName: 'fresh mushrooms',
            meta: ['fresh'],
            extendedName: 'fresh mushrooms',
            image:
              'https://spoonacular.com/cdn/ingredients_100x100/mushrooms.png',
          },
        ],
        usedIngredients: [
          {
            id: 10123,
            amount: 12,
            unit: '',
            unitLong: '',
            unitShort: '',
            aisle: 'Meat',
            name: 'bacon strips',
            original: '12 bacon strips, halved',
            originalName: 'bacon strips, halved',
            meta: ['halved'],
            image:
              'https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png',
          },
        ],
        unusedIngredients: [],
        likes: 0,
      },
      {
        id: 265640,
        title: 'Ranch-Style Coleslaw with Bacon',
        image: 'https://spoonacular.com/recipeImages/265640-312x231.jpg',
        imageType: 'jpg',
        usedIngredientCount: 1,
        missedIngredientCount: 2,
        missedIngredients: [
          {
            id: 10011109,
            amount: 16,
            unit: 'oz',
            unitLong: 'ounces',
            unitShort: 'oz',
            aisle: 'Produce',
            name: 'coleslaw blend',
            original: '1 pkg. (16 oz.) coleslaw blend (cabbage slaw mix)',
            originalName: 'pkg. coleslaw blend (cabbage slaw mix)',
            meta: ['(cabbage slaw mix)'],
            image:
              'https://spoonacular.com/cdn/ingredients_100x100/coleslaw.png',
          },
          {
            id: 4639,
            amount: 0.5,
            unit: 'cup',
            unitLong: 'cups',
            unitShort: 'cup',
            aisle: 'Oil, Vinegar, Salad Dressing',
            name: 'classic ranch dressing',
            original: '1/2 cup KRAFT Classic Ranch Dressing',
            originalName: 'KRAFT Classic Ranch Dressing',
            meta: ['kraft'],
            image:
              'https://spoonacular.com/cdn/ingredients_100x100/ranch-dressing.jpg',
          },
        ],
        usedIngredients: [
          {
            id: 10123,
            amount: 4,
            unit: 'slices',
            unitLong: 'slices',
            unitShort: 'slice',
            aisle: 'Meat',
            name: 'oscar mayer bacon',
            original: '4 slices cooked OSCAR MAYER Bacon, crumbled',
            originalName: 'cooked OSCAR MAYER Bacon, crumbled',
            meta: ['crumbled', 'cooked'],
            extendedName: 'cooked oscar mayer bacon',
            image:
              'https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png',
          },
        ],
        unusedIngredients: [],
        likes: 0,
      },
      {
        id: 888690,
        title: 'Brown Sugar Devils on Horseback',
        image: 'https://spoonacular.com/recipeImages/888690-312x231.jpg',
        imageType: 'jpg',
        usedIngredientCount: 1,
        missedIngredientCount: 2,
        missedIngredients: [
          {
            id: 1004,
            amount: 8,
            unit: 'ounces',
            unitLong: 'ounces',
            unitShort: 'oz',
            aisle: 'Cheese',
            name: 'cheese',
            original: '8 ounces blue cheese, crumbled',
            originalName: 'blue cheese, crumbled',
            meta: ['blue', 'crumbled'],
            extendedName: 'blue cheese',
            image:
              'https://spoonacular.com/cdn/ingredients_100x100/blue-cheese.png',
          },
          {
            id: 9421,
            amount: 24,
            unit: 'pieces',
            unitLong: '',
            unitShort: '',
            aisle: 'Produce',
            name: 'medjool dates',
            original: '24 pieces Medjool dates',
            originalName: 'Medjool dates',
            meta: [],
            image: 'https://spoonacular.com/cdn/ingredients_100x100/dates.jpg',
          },
        ],
        usedIngredients: [
          {
            id: 10123,
            amount: 8,
            unit: 'strips',
            unitLong: 'strips',
            unitShort: 'strips',
            aisle: 'Meat',
            name: 'bacon',
            original: '8 strips bacon, cut crosswise into thirds',
            originalName: 'bacon, cut crosswise into thirds',
            meta: [],
            image:
              'https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png',
          },
        ],
        unusedIngredients: [],
        likes: 0,
      },
    ];
    res.send(mockData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from the external API');
  }
};
