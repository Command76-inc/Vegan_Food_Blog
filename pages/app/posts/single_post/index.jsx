import { Wrapper } from "../../layout/wrapper";
import { useState, useEffect, useRef } from "react";
import styles from "./single_post.module.scss";
import Link from "next/link";

const title = "Blog | The Vegan Blog";
const pageTitle = "Blog";
const description =
  "The Vegan Blog is a one stop destination for all your vegan essentials";

export default function SinglePost(props) {
  const bodyContent = useRef(null);
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const getIdFromUrl = () => {
    if (typeof window !== undefined) {
      const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
      return params.id;
    }
  };

  useEffect(() => {
    getIdFromUrl();
    setLoading(true);
    fetch(`/api/post/get_single_post?id=${getIdFromUrl()}`, {
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
  }, []);

  useEffect(() => {
    if (bodyContent.current !== null) {
      bodyContent.current.innerHTML = data.content;
    }
  }, [isLoading]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No Post Data</p>;

  return (
    <Wrapper className={props.className}>
      <main className={styles["post-container"]}>
        <h2>{data.title}</h2>
        <div className={styles["content-body"]} ref={bodyContent}></div>
        <h4>Tags</h4>
        <ul>
          {data.tags.map((tag) => {
            return <li key={tag}>{tag}</li>;
          })}
        </ul>
        <Link href="/app/posts/all_posts">Go back to see all posts</Link>
      </main>
    </Wrapper>
  );
}
