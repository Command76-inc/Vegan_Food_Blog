import { db } from "../../../lib/db";

export default async function getPosts(req, res) {
  const post = await db.Post;
  const getSinglePost = await post.findById({_id: req.query.id});

  res.json(getSinglePost);
}