import { db } from "../../../lib/db";

export default async function getAllRecipes() {
  const recipes = await db.Recipes;

  const sortedRecipes = await recipes.find().sort({ updatedAt: "desc" });

  res.json(sortedRecipes);
}
