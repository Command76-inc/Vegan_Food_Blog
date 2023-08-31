import { Pagination, Box, Typography, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/Image";
import styles from "./all_posts.module.scss";
import * as postHelper from "../../../utility/post_helper";

export default function FetchPosts(props) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  let [page, setPage] = useState(0);
  const PER_PAGE = 10;

  useEffect(() => {
    setLoading(true);
    fetch("/api/post/get_posts?page=" + page, {
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
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error: ", error));
  }, [page]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No Post Data</p>;

  return (
    <>
      {data.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE).map((el) => (
        <Link
          href={`/app/posts/single_post?id=${el.id}`}
          key={el.id + "-link"}
          passHref
          legacyBehavior
        >
          <Box className={styles["fetch-posts"]}>
            <Grid container>
              <Grid item>
                <div className={styles["blog-image"]}>
                  <Image src={`/uploads/${el.headerImagePath}`} layout="fill" />
                  <div
                    className={`${styles["image-border"]} ${styles["image-border-leftright"]} ${styles["right"]}`}
                  ></div>
                  <div
                    className={`${styles["image-border"]} ${styles["image-border-leftright"]} ${styles["left"]}`}
                  ></div>
                  <div
                    className={`${styles["image-border"]} ${styles["image-border-topbottom"]} ${styles["top"]}`}
                  ></div>
                  <div
                    className={`${styles["image-border"]} ${styles["image-border-topbottom"]} ${styles["bottom"]}`}
                  ></div>
                </div>
              </Grid>
              <Grid item>
                <Typography variant="h1Secondary">{el.title}</Typography>
                <Typography>{el.description}</Typography>
                <small>{el.tags}</small>
              </Grid>
            </Grid>
          </Box>
        </Link>
      ))}
      <Pagination
        count={Math.ceil(data.length / PER_PAGE)}
        size="large"
        page={page + 1}
        variant="outlined"
        shape="rounded"
        className={styles.pagination}
        onChange={(e, value) => setPage(value - 1)}
      />
    </>
  );
}
