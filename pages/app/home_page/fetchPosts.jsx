import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Link from "next/link";

export default function HomePagePosts() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/post/get_home_page_posts", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("POST DATA");
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error: ", error));
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No Post Data</p>;

  return (
    <section className={styles.section}>
      <h3 className={styles.sectionHeading}>Latest Blog</h3>
      <Grid container>
        {data.map((post) => {
          const date = new Date(post.updatedAt);

          return (
          <Grid key={post.id} className={styles['post-container']} item  xs={12} md={6} lg={3}>
            <Link
              href={`/app/posts/single_post?id=${post.id}`}
              passHref
              legacyBehavior
            >
                <article className={styles.post}>
                  <div>{post.title}</div>
                  <div>{post.content}</div>
                  <div>{date.getFullYear()}</div>
                </article>
            </Link>
          </Grid>
        )})}
      </Grid>
    </section>
  );
}
