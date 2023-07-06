import { db } from "../../../lib/db";

export default async function getPosts(req, res) {
  const post = await db.Post;
  const getPosts = await post.find().sort({"updatedAt": "desc"});

  res.json(getPosts);
}
