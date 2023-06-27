import { db } from "../../../lib/db";

export default async function getPosts(req, res) {
  const post = await db.Post;

  const getPosts = await post.find();
  console.log(getPosts)

  res.json(getPosts);
}