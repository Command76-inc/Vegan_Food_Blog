import { db } from ".../.../.../lib/db";

export default async function getSingleRecipe(req, res) {
  const recipes = await db.recipes;

  const fetchedRecipe = await recipes.findById({ _id: req.query.id });

  res.json(fetchedRecipe);
}
