import styles from "./index.module.scss";
import { useState, useEffect } from "react";
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
      <div className="pure-g">
        {data.map((post) => (
          <Link
            href={`/posts/single_post?id=${post.id}`}
            passHref
            legacyBehavior
          >
            <article
              className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4"
              key={post.id + "-article"}
            >
              <div className={styles.article} key={post.id + "-div1"}>
                <div key={post.id + "div2"}>{post.title}</div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
