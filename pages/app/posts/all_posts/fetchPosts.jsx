import { Pagination } from "@mui/material";
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import styles from "../posts.module.scss";

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

  const getContent = (content) => {
    const regexp = /<img.*>/ig
    return content.replace(regexp, ' [image] ')
  }

  return (
    <>
      {data.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE).map((el) => (
        <Link
          href={`/app/posts/single_post?id=${el.id}`}
          key={el.id + "-link"}
          passHref
          legacyBehavior
        >
          <div className={props.className} key={el.id + "-div"}>
            <h2 key={el.id + "-h2"}>{el.title}</h2>
            <p key={el.id + "-p"}>{getContent(el.content)}</p>
            <small key={el.id + "-small"}>{el.tags}</small>
          </div>
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