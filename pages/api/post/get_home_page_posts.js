import { db } from "../../../lib/db";

export default async function getHomePagePosts(req, res) {
  const post = await db.Post;

  const getHomePagePosts = await post.find().sort({"updatedAt": "desc"}).limit(4);

  res.json(getHomePagePosts);
}