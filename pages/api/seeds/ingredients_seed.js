// change 2

import { db } from "../../../lib/db";

function getTitle() {
  const vegetables = [
    "Carrot",
    "Broccoli",
    "Tomato",
    "Cucumber",
    "Spinach",
    "Bell Pepper",
    "Zucchini",
    "Eggplant",
    "Cauliflower",
    "Lettuce",
    "Onion",
    "Potato",
    "Radish",
    "Celery",
    "Asparagus",
    "Kale",
    "Mushroom",
    "Beetroot",
    "Sweet Potato",
    "Green Bean",
    "Peas",
  ];

  return vegetables[Math.floor(Math.random() * 20)];
}

function getCalories(servingSize) {
  return Math.ceil(Math.floor(Math.random() * 500 * servingSize));
}

function getServingSize(servingSize) {
  return Number(Math.ceil(Math.floor(Math.random() * 5))).toFixed(2);
}

function getTotalFat(servingSize) {
  return Math.ceil(Math.floor(Math.random() * 100 * servingSize));
}

function getSaturatedFat(servingSize) {
  return Math.ceil(Math.floor(Math.random() * 25 * servingSize));
}

function getPolysaturatedFat(servingSize) {
  return Math.ceil(Math.floor(Math.random() * 15 * servingSize));
}

function getMonosaturatedFat(servingSize) {
  return Math.ceil(Math.floor(Math.random() * 10 * servingSize));
}

function getTransFat(servingSize) {
  return Math.ceil(Math.floor(Math.random() * 5 * servingSize));
}

function getCholesterol(servingSize) {
  return Math.ceil(Math.floor(Math.random() * 350 * servingSize));
}

function getSodium(servingSize) {
  return Math.ceil(Math.floor(Math.random() * 2300 * servingSize));
}

function getTotalCarbohydrates(servingSize) {
  return Math.ceil(Math.floor(Math.random() * 300 * servingSize));
}

function getFiber(servingSize) {
  return Math.ceil(Math.floor(Math.random() * 40 * servingSize));
}

function getSugars(servingSize) {
  return Math.ceil(Math.floor(Math.random() * 80 * servingSize));
}

function getProtein(servingSize) {
  return Math.ceil(Math.floor(Math.random() * 150 * servingSize));
}

function getVitaminD(servingSize) {
  return Math.ceil(Math.floor(Math.random() * 100 * servingSize));
}

function getCalcium(servingSize) {
  return Math.ceil(Math.floor(Math.random() * 100 * servingSize));
}

function getIron(servingSize) {
  return Math.ceil(Math.floor(Math.random() * 100 * servingSize));
}

function getPotassium(servingSize) {
  return Math.ceil(Math.floor(Math.random() * 3500 * servingSize));
}

function getCaffeine(servingSize) {
  return Math.ceil(Math.floor(Math.random() * 200 * servingSize));
}

export default function insertIngredientSeedData(req, res) {
  const ingredients = db.Ingredients;
  let n = 15;
  if (req.query.number !== undefined) {
    if (isNaN(parseInt(req.query.number))) {
      return res.send(
        "Did not seed because query param value was not a number."
      );
    }
    n = parseInt(req.query.number);
  }

  const documents = new Array(n);

  for (let i = 0; i < documents.length; i++) {
    const servingSize = getServingSize();
    documents[i] = {
      title: getTitle(),
      serving_size: servingSize,
      calories: getCalories(servingSize),
      total_fat: getTotalFat(servingSize),
      saturated_fat: getSaturatedFat(servingSize),
      polysaturated_fat: getPolysaturatedFat(servingSize),
      monosaturated_fat: getMonosaturatedFat(servingSize),
      trans_fat: getTransFat(servingSize),
      cholestrol: getCholesterol(servingSize),
      sodium: getSodium(servingSize),
      total_carbohydrates: getTotalCarbohydrates(servingSize),
      fiber: getFiber(servingSize),
      sugars: getSugars(servingSize),
      protein: getProtein(servingSize),
      vitamin_d: getVitaminD(servingSize),
      calcium: getCalcium(servingSize),
      iron: getIron(servingSize),
      potassium: getPotassium(servingSize),
      caffein: getCaffeine(servingSize),
    };
  }

  ingredients.insertMany(documents);

  if (req.method === "POST") {
    if (res.statusCode !== 200) {
      return res.send(
        "Something went wrong.  Check logs in terminal to see what it could be."
      );
    } else {
      return res.send("Seeding was performed successfully.");
    }
  } else {
    return res.status(400).send("Request header was not a POST request header");
  }
}
