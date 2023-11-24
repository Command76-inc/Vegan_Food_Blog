import { db } from "../../../lib/db";

export default async function getAllRecipes(req, res) {
  const recipes = await db.Recipes;

  const sortedRecipes = await recipes.find({}, null, {$sort: {"updatedAt": "desc"}});

  res.json(sortedRecipes);
}
