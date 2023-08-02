import { db } from "../../../lib/db";

function getTitle() {
  const titles = [
    "Badass recipe",
    "Awesome Recipe",
    "Greatest Recipe of all time",
    "Amazeballs",
    "I can't believe this is real!",
  ];

  return titles[Math.floor(Math.random() * 4)];
}

function getDescription() {
  const wordsToUse = [
    "The",
    "broccoli",
    "carrots",
    "spinach",
    "rice",
    "potatoes",
    "roasted",
    "spicy",
    "grilled",
    "of",
    "this",
    "1 hour",
    "quick",
    "healthy",
    "easy",
    "juicy",
    "crunchy",
  ];

  const sentence = new Array(10);

  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = wordsToUse[Math.floor(Math.random() * 16)];
  }

  return sentence.join(" ");
}

function getIngredients() {
  const wordsToUse = ["broccoli", "carrots", "spinach", "rice", "potatoes"];

  const ingredients = new Array(Math.ceil(Math.random() * 4));

  for (let i = 0; i < ingredients.length; i++) {
    ingredients[i] = wordsToUse[Math.floor(Math.random() * 4)];
  }

  return { ingredients: ingredients, length: ingredients.length };
}

function getPrep() {
  const wordsToUse = [
    "Dice broccoli into 20 grams and stuff",
    "Chop carrots into little squares",
    "Poor 1 cup of rice into measuring cup and mix with water",
    "Slice potatoes into fingernail length",
    "Pour oil and vinegar on spinach",
  ];

  const prep = new Array(Math.ceil(Math.random() * 4));

  for (let i = 0; i < prep.length; i++) {
    prep[i] = wordsToUse[Math.floor(Math.random() * 4)];
  }

  return prep;
}

function getDirections() {
  const wordsToUse = [
    "Stir try broccoli for 30 mins",
    "Back potatoe for 30 mins",
    "Steam cook spinach for 10 mins",
    "Cook rice in pot, boil for 1 hour while stirring every 30 mins",
    "Steam cook carrots for 15 mins",
  ];

  const directions = new Array(Math.ceil(Math.random() * 4));

  for (let i = 0; i < directions.length; i++) {
    directions[i] = wordsToUse[Math.floor(Math.random() * 4)];
  }

  return directions;
}

function getPrepTime() {
  const time = Math.ceil(Math.random() * 120);
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours} ${hours !== 1 ? "hours" : "hour"} and ${minutes} ${
    minutes !== 1 ? "minutes" : "minute"
  }`;
}

function getCookTime() {
  const time = Math.ceil(Math.random() * 120);
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours} ${hours !== 1 ? "hours" : "hour"} and ${minutes} ${
    minutes !== 1 ? "minutes" : "minute"
  }`;
}

export default async function insertSeedRecipeData(req, res) {
  const recipe = await db.Recipes;
  const documents = new Array(15);
  for (let i = 0; i < documents.length; i++) {
    const { ingredients: ingredients, length: length } = getIngredients();

    documents[i] = {
      title: getTitle(),
      description: getDescription(),
      ingredient: ingredients,
      prep: getPrep(),
      // in minutes
      prep_time: getPrepTime(),
      directions: getDirections(),
      // in minutes
      cook_time: getCookTime(),
      // A total count of the ingredient array
      ingredients: length,
      // Points to an Amazon S3 bucket item URL
      dish_image: "https://aws.s3.bucket.url",
    };
  }

  recipe.insertMany(documents);

  if (req.method === "POST") {
    console.log(res)
    if (res.statusCode !== 200) {
      res.send(
        "Something went wrong, check terminal for any potential errors being logged."
      );
    } else {
      res.status(200).send("Seed data should be inserted into local database");
    }
  } else {
    res.status(400).send("Improper http method used");
  }
}
