import { Wrapper } from "../../layout/wrapper";
import { Alert } from "@mui/material";
import styles from "./single_post.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

export default function UpdatePost() {
  const [flash, setFlash] = useState(false);
  const [status, setStatus] = useState(null);
  const router = useRouter();

  const bodyContent = useRef(null);
  const [data, setData] = useState(null);
  const [tags, setTags] = useState("Getting Tags");

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
        setTags(data.tags);
        setLoading(false);
      })
      .catch((error) => console.error("Error: ", error));
  }, []);

  useEffect(() => {
    if (bodyContent.current !== null) {
      bodyContent.current.innerHTML = data.content;
    }
  }, [isLoading]);

  const publishUpdate = async (event, data) => {
    event.preventDefault();
    const f = new FormData();

    f.append("id", getIdFromUrl());
    f.append("content", bodyContent.current.innerHTML);
    f.append("tags", event.target.tags.value);

    const res = await fetch("/api/post/update_single_post", {
      method: "PUT",
      body: f,
    });

    const resBody = await res.json();

    if (res.status == 200) {
      setFlash(true);
      setData(resBody.status);
      setStatus(200);
    } else {
      setFlash(true);
      setData(resBody.status);
      setStatus(400);
    }
  };

  useEffect(() => {
    if (flash) {
      setTimeout(() => {
        if (status === 200) {
          setFlash(false);
          return router.push(`/app/posts/single_post?id=${getIdFromUrl()}`);
        } else {
          setFlash(false);
        }
      }, 5000);
    }
  }, [status]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No Post Data</p>;

  return (
    <Wrapper className={styles.container}>
      {flash && status === 200 ? (
        <Alert color="success">{data}</Alert>
      ) : flash && status === 400 ? (
        <Alert color="error">{data}</Alert>
      ) : null}
      <h1>{data.title}</h1>
      <form
        action="/api/post/update_single_post"
        method="put"
        className={styles["form-container"]}
        name="update"
        id="update"
        onSubmit={publishUpdate}
      >
        <div
          contentEditable={true}
          onChange={() => null}
          id="contentBody"
          data-text="Content goes here."
          ref={bodyContent}
        ></div>
        <input
          type="text"
          placeholder={tags}
          name="tags"
          id="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </form>
      <button className={styles.cancel} onClick={router.back}>
        Cancel
      </button>
      <input
        className={styles.update}
        type="submit"
        form="update"
        value="Update"
      />
    </Wrapper>
  );
}
