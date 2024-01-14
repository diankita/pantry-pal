const db = require('../models');

exports.findByIngredient = async (req, res) => {
  try {
    const ingredients = req.query.ingredients;
    console.log(ingredients);
    // const response = await fetch(
    //   `https://${process.env.FOOD_API_URL}/recipes/findByIngredients?ingredients=${ingredients}&number=10&ignorePantry=true&ranking=2`,
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
        "id": 549612,
        "title": "Homemade Holiday Gifts: Vanilla Bean Salt + Vanilla Bean Sugar",
        "image": "https://spoonacular.com/recipeImages/549612-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 0,
        "missedIngredientCount": 1,
        "missedIngredients": [
          {
            "id": 93622,
            "amount": 1,
            "unit": "",
            "unitLong": "",
            "unitShort": "",
            "aisle": "Baking",
            "name": "vanilla bean",
            "original": "1 vanilla bean (with the seeds)",
            "originalName": "vanilla bean (with the seeds)",
            "meta": [
              "with the seeds)"
            ],
            "extendedName": "vanilla bean bean",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla.jpg"
          }
        ],
        "usedIngredients": [],
        "unusedIngredients": [
          {
            "id": 5006,
            "amount": 1,
            "unit": "serving",
            "unitLong": "serving",
            "unitShort": "serving",
            "aisle": "Meat",
            "name": "whole chicken",
            "original": "chicken",
            "originalName": "chicken",
            "meta": [],
            "image": "https://spoonacular.com/cdn/ingredients_100x100/whole-chicken.jpg"
          }
        ],
        "likes": 137
      },
      {
        "id": 559886,
        "title": "Chicken Fajita Sandwiches",
        "image": "https://spoonacular.com/recipeImages/559886-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 1,
        "missedIngredientCount": 2,
        "missedIngredients": [
          {
            "id": 18064,
            "amount": 8,
            "unit": "slices",
            "unitLong": "slices",
            "unitShort": "slice",
            "aisle": "Bakery/Bread",
            "name": "bread",
            "original": "8 slices of your favorite bread",
            "originalName": "your favorite bread",
            "meta": [
              "your favorite"
            ],
            "image": "https://spoonacular.com/cdn/ingredients_100x100/white-bread.jpg"
          },
          {
            "id": 93838,
            "amount": 4,
            "unit": "",
            "unitLong": "",
            "unitShort": "",
            "aisle": "Cheese",
            "name": "thicker of havarti cheese",
            "original": "4 thicker slices of havarti cheese",
            "originalName": "thicker slices of havarti cheese",
            "meta": [],
            "image": "https://spoonacular.com/cdn/ingredients_100x100/taleggio-cheese.jpg"
          }
        ],
        "usedIngredients": [
          {
            "id": 5006,
            "amount": 4,
            "unit": "servings",
            "unitLong": "servings",
            "unitShort": "servings",
            "aisle": "Meat",
            "name": "chicken fajitas",
            "original": "chicken fajitas, click for recipe",
            "originalName": "chicken fajitas, click for recipe",
            "meta": [
              "for recipe"
            ],
            "image": "https://spoonacular.com/cdn/ingredients_100x100/whole-chicken.jpg"
          }
        ],
        "unusedIngredients": [],
        "likes": 6042
      },
      {
        "id": 574737,
        "title": "Garlic Herb Crock Pot Chicken",
        "image": "https://spoonacular.com/recipeImages/574737-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 1,
        "missedIngredientCount": 2,
        "missedIngredients": [
          {
            "id": 2063,
            "amount": 3,
            "unit": "sprigs",
            "unitLong": "sprigs",
            "unitShort": "sprigs",
            "aisle": "Produce",
            "name": "rosemary",
            "original": "3 sprigs of fresh rosemary",
            "originalName": "fresh rosemary",
            "meta": [
              "fresh"
            ],
            "extendedName": "fresh rosemary",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/rosemary.jpg"
          },
          {
            "id": 14106,
            "amount": 12,
            "unit": "oz",
            "unitLong": "ounces",
            "unitShort": "oz",
            "aisle": "Alcoholic Beverages",
            "name": "white wine and herb marinade",
            "original": "12 oz. bottle of white wine and herb marinade",
            "originalName": "white wine and herb marinade",
            "meta": [],
            "image": "https://spoonacular.com/cdn/ingredients_100x100/white-wine.jpg"
          }
        ],
        "usedIngredients": [
          {
            "id": 5006,
            "amount": 5,
            "unit": "lbs",
            "unitLong": "pounds",
            "unitShort": "lb",
            "aisle": "Meat",
            "name": "chicken",
            "original": "5-6lbs. of whole chicken",
            "originalName": "whole chicken",
            "meta": [
              "whole"
            ],
            "extendedName": "whole chicken",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/whole-chicken.jpg"
          }
        ],
        "unusedIngredients": [],
        "likes": 1974
      },
      {
        "id": 570366,
        "title": "Basic Crockpot Buffalo Chicken",
        "image": "https://spoonacular.com/recipeImages/570366-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 1,
        "missedIngredientCount": 2,
        "missedIngredients": [
          {
            "id": 6194,
            "amount": 1,
            "unit": "cup",
            "unitLong": "cup",
            "unitShort": "cup",
            "aisle": "Canned and Jarred",
            "name": "strong chicken broth",
            "original": "1 cup of strong chicken broth",
            "originalName": "strong chicken broth",
            "meta": [],
            "image": "https://spoonacular.com/cdn/ingredients_100x100/chicken-broth.png"
          },
          {
            "id": 98878,
            "amount": 1,
            "unit": "cup",
            "unitLong": "cup",
            "unitShort": "cup",
            "aisle": "Condiments",
            "name": "frank's redhot original",
            "original": "1 cup Frank's RedHot Original",
            "originalName": "Frank's RedHot Original",
            "meta": [],
            "image": "https://spoonacular.com/cdn/ingredients_100x100/hot-sauce-or-tabasco.png"
          }
        ],
        "usedIngredients": [
          {
            "id": 5006,
            "amount": 4,
            "unit": "",
            "unitLong": "",
            "unitShort": "",
            "aisle": "Meat",
            "name": "chicken breats",
            "original": "4 boneless, skinless chicken breats",
            "originalName": "boneless, skinless chicken breats",
            "meta": [
              "boneless",
              "skinless"
            ],
            "extendedName": "skinless boneless chicken breats",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/whole-chicken.jpg"
          }
        ],
        "unusedIngredients": [],
        "likes": 529
      },
      {
        "id": 531683,
        "title": "Barbecue Chicken Quesadillas",
        "image": "https://spoonacular.com/recipeImages/531683-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 1,
        "missedIngredientCount": 2,
        "missedIngredients": [
          {
            "id": 1041009,
            "amount": 1.5,
            "unit": "cups",
            "unitLong": "cups",
            "unitShort": "cup",
            "aisle": "Cheese",
            "name": "cheese",
            "original": "1½ cups cheese",
            "originalName": "cheese",
            "meta": [],
            "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
          },
          {
            "id": 18364,
            "amount": 12,
            "unit": "",
            "unitLong": "",
            "unitShort": "",
            "aisle": "Bakery/Bread",
            "name": "tortillas",
            "original": "12 tortillas",
            "originalName": "tortillas",
            "meta": [],
            "image": "https://spoonacular.com/cdn/ingredients_100x100/flour-tortilla.jpg"
          }
        ],
        "usedIngredients": [
          {
            "id": 5006,
            "amount": 2,
            "unit": "cups",
            "unitLong": "cups",
            "unitShort": "cup",
            "aisle": "Meat",
            "name": "barbecue chicken",
            "original": "2 cups shredded barbecue chicken",
            "originalName": "shredded barbecue chicken",
            "meta": [
              "shredded"
            ],
            "extendedName": "shredded barbecue chicken",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/whole-chicken.jpg"
          }
        ],
        "unusedIngredients": [],
        "likes": 37
      },
      {
        "id": 74092,
        "title": "Chesapeake Chicken",
        "image": "https://spoonacular.com/recipeImages/74092-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 1,
        "missedIngredientCount": 2,
        "missedIngredients": [
          {
            "id": 1052034,
            "amount": 5,
            "unit": "tbsp",
            "unitLong": "tablespoons",
            "unitShort": "Tbsp",
            "aisle": "Spices and Seasonings",
            "name": "old bay seasoning",
            "original": "5 tbsp. Old Bay Seasoning",
            "originalName": "Old Bay Seasoning",
            "meta": [],
            "image": "https://spoonacular.com/cdn/ingredients_100x100/seasoning.png"
          },
          {
            "id": 1026168,
            "amount": 3,
            "unit": "drops",
            "unitLong": "drops",
            "unitShort": "drops",
            "aisle": "Condiments",
            "name": "tabasco",
            "original": "3 drops Tabasco",
            "originalName": "Tabasco",
            "meta": [],
            "image": "https://spoonacular.com/cdn/ingredients_100x100/hot-sauce-or-tabasco.png"
          }
        ],
        "usedIngredients": [
          {
            "id": 5006,
            "amount": 1,
            "unit": "",
            "unitLong": "",
            "unitShort": "",
            "aisle": "Meat",
            "name": "chicken",
            "original": "1 chicken, cut into 8 pieces",
            "originalName": "chicken, cut into 8 pieces",
            "meta": [
              "cut into 8 pieces"
            ],
            "image": "https://spoonacular.com/cdn/ingredients_100x100/whole-chicken.jpg"
          }
        ],
        "unusedIngredients": [],
        "likes": 4
      },
      {
        "id": 531847,
        "title": "Chicken Salad Quesadillas",
        "image": "https://spoonacular.com/recipeImages/531847-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 1,
        "missedIngredientCount": 2,
        "missedIngredients": [
          {
            "id": 1041009,
            "amount": 1.5,
            "unit": "cups",
            "unitLong": "cups",
            "unitShort": "cup",
            "aisle": "Cheese",
            "name": "cheese",
            "original": "1½ cups cheese",
            "originalName": "cheese",
            "meta": [],
            "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
          },
          {
            "id": 18364,
            "amount": 12,
            "unit": "",
            "unitLong": "",
            "unitShort": "",
            "aisle": "Bakery/Bread",
            "name": "tortillas",
            "original": "12 tortillas",
            "originalName": "tortillas",
            "meta": [],
            "image": "https://spoonacular.com/cdn/ingredients_100x100/flour-tortilla.jpg"
          }
        ],
        "usedIngredients": [
          {
            "id": 5006,
            "amount": 3,
            "unit": "cups",
            "unitLong": "cups",
            "unitShort": "cup",
            "aisle": "Meat",
            "name": "chicken salad",
            "original": "3 cups chicken salad",
            "originalName": "chicken salad",
            "meta": [],
            "image": "https://spoonacular.com/cdn/ingredients_100x100/whole-chicken.jpg"
          }
        ],
        "unusedIngredients": [],
        "likes": 3
      },
      {
        "id": 1075071,
        "title": "25 Chicken",
        "image": "https://spoonacular.com/recipeImages/1075071-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 1,
        "missedIngredientCount": 2,
        "missedIngredients": [
          {
            "id": 10123,
            "amount": 1,
            "unit": "can",
            "unitLong": "can",
            "unitShort": "can",
            "aisle": "Meat",
            "name": "bacon wrapped chicken - no one resist this cheese stuffed",
            "original": "Bacon Wrapped Chicken – No one can resist this cheese stuffed, bacon wrapped chicken! Brush on some bbq sauce and serve with mashed potatoes and corn and you're in business!",
            "originalName": "Bacon Wrapped Chicken – No one resist this cheese stuffed, bacon wrapped chicken! Brush on some bbq sauce and serve with mashed potatoes and corn and you're in business",
            "meta": [
              "with mashed potatoes and corn and you're in business!"
            ],
            "extendedName": "canned bacon wrapped chicken - no one resist this cheese stuffed",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
          },
          {
            "id": 20444,
            "amount": 15,
            "unit": "servings",
            "unitLong": "servings",
            "unitShort": "servings",
            "aisle": "Pasta and Rice",
            "name": "chicken & rice casserole - comfort food all the way! this recipe remind of of sunday supper at my gr",
            "original": "Chicken & Wild Rice Casserole – Comfort food all the way! This recipe remind of of Sunday supper at my grandma's house.",
            "originalName": "Chicken & Wild Rice Casserole – Comfort food all the way! This recipe remind of of Sunday supper at my grandma's house",
            "meta": [
              "wild"
            ],
            "extendedName": "wild chicken & rice casserole - comfort food all the way! this recipe remind of of sunday supper at my gr",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/uncooked-white-rice.png"
          }
        ],
        "usedIngredients": [
          {
            "id": 5006,
            "amount": 15,
            "unit": "servings",
            "unitLong": "servings",
            "unitShort": "servings",
            "aisle": "Meat",
            "name": "brown sugar pineapple chicken - my favorite grilling recipe! i love the glaze on this chicken and th",
            "original": "Brown Sugar Pineapple Chicken – My favorite grilling recipe! I love the sweet glaze on this chicken and the pineapple is insanely good. Serve with rice or on a burger bun with lettuce!",
            "originalName": "Brown Sugar Pineapple Chicken – My favorite grilling recipe! I love the sweet glaze on this chicken and the pineapple is insanely good. Serve with rice or on a burger bun with lettuce",
            "meta": [
              "sweet",
              "with rice or on a burger bun with lettuce!"
            ],
            "extendedName": "sweet brown sugar pineapple chicken - my favorite grilling recipe! i love the glaze on this chicken and th",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/whole-chicken.jpg"
          }
        ],
        "unusedIngredients": [],
        "likes": 1
      },
      {
        "id": 265707,
        "title": "Greek-Style Lemon Roast Chicken",
        "image": "https://spoonacular.com/recipeImages/265707-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 1,
        "missedIngredientCount": 2,
        "missedIngredients": [
          {
            "id": 9150,
            "amount": 1,
            "unit": "",
            "unitLong": "",
            "unitShort": "",
            "aisle": "Produce",
            "name": "lemon",
            "original": "1 lemon, cut crosswise in half",
            "originalName": "lemon, cut crosswise in half",
            "meta": [],
            "image": "https://spoonacular.com/cdn/ingredients_100x100/lemon.png"
          },
          {
            "id": 4135,
            "amount": 0.5,
            "unit": "cup",
            "unitLong": "cups",
            "unitShort": "cup",
            "aisle": "Oil, Vinegar, Salad Dressing",
            "name": "greek vinaigrette dressing",
            "original": "1/2 cup KRAFT Greek Vinaigrette Dressing",
            "originalName": "KRAFT Greek Vinaigrette Dressing",
            "meta": [
              "kraft"
            ],
            "image": "https://spoonacular.com/cdn/ingredients_100x100/vinaigrette.jpg"
          }
        ],
        "usedIngredients": [
          {
            "id": 5109,
            "amount": 4,
            "unit": "lb",
            "unitLong": "pounds",
            "unitShort": "lb",
            "aisle": "Meat",
            "name": "roasting chicken",
            "original": "1 whole roasting chicken (4 lb.)",
            "originalName": "whole roasting chicken",
            "meta": [
              "whole"
            ],
            "extendedName": "whole roasting chicken",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/whole-chicken.jpg"
          }
        ],
        "unusedIngredients": [],
        "likes": 0
      },
      {
        "id": 544373,
        "title": "Chicken Fajita Quesadilla",
        "image": "https://spoonacular.com/recipeImages/544373-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 1,
        "missedIngredientCount": 2,
        "missedIngredients": [
          {
            "id": 1251,
            "amount": 1,
            "unit": "cup",
            "unitLong": "cup",
            "unitShort": "cup",
            "aisle": "Cheese",
            "name": "cheese",
            "original": "1 cup cheese (mexican cheese blend, mozzarella or cheddar), grated",
            "originalName": "cheese (mexican cheese blend, mozzarella or cheddar), grated",
            "meta": [
              "grated",
              "(mexican cheese blend, mozzarella or cheddar)"
            ],
            "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
          },
          {
            "id": 18364,
            "amount": 4,
            "unit": "",
            "unitLong": "",
            "unitShort": "",
            "aisle": "Bakery/Bread",
            "name": "tortillas",
            "original": "4 tortillas",
            "originalName": "tortillas",
            "meta": [],
            "image": "https://spoonacular.com/cdn/ingredients_100x100/flour-tortilla.jpg"
          }
        ],
        "usedIngredients": [
          {
            "id": 5006,
            "amount": 1,
            "unit": "cup",
            "unitLong": "cup",
            "unitShort": "cup",
            "aisle": "Meat",
            "name": "chicken fajitas",
            "original": "1 cup chicken fajitas, chopped (chicken & veggies)",
            "originalName": "chicken fajitas, chopped (chicken & veggies)",
            "meta": [
              "chopped",
              "(chicken & veggies)"
            ],
            "image": "https://spoonacular.com/cdn/ingredients_100x100/whole-chicken.jpg"
          }
        ],
        "unusedIngredients": [],
        "likes": 0
      }
    ];
    res.send(mockData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from the external API');
  }
};
