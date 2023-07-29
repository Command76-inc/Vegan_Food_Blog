import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import { Grid, Box, Typography, useTheme } from "@mui/material";
import Link from "next/link";

export default function HomePagePosts() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const { palette } = useTheme();

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

  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  return (
    <section className={styles.section}>
      <Typography variant="h1Primary" component="h1" className={styles.sectionHeading}>Latest Blog</Typography>
      <Grid container spacing={5}>
        {data.map((post) => {
          const date = new Date(post.createdAt);

          return (
          <Grid key={post.id} item xs={12} md={6} lg={4}>
            <Box className={styles['post-container']}>
              <Link
                href={`/app/posts/single_post?id=${post.id}`}
                passHref
                legacyBehavior
              >
                <Box className={styles.post}>
                  <Grid container direction="column" justifyContent="space-between" sx={{ height: "100%" }}>
                    <Grid item xs>
                      <Box sx={{ "word-break": "break-word" }}>
                        <Typography variant="h1Secondary" className={styles.title}>{post.title}</Typography>
                        <Typography color="" className={styles.description}>{post.content}</Typography>
                      </Box>
                    </Grid>
                      <div className={styles.date}><i>{`Published: ${month[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`}</i></div>
                  </Grid>
                </Box>
              </Link>
            </Box>
          </Grid>
        )})}
      </Grid>
    </section>
  );
}
