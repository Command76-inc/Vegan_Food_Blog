import { Wrapper } from "../../layout/wrapper";
import { Alert } from "@mui/material";
import styles from "./create_posts.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function CreatePosts() {
  const [title, setTitle] = useState("Set Title");
  const [tags, setTags] = useState("Assign Tags");
  const [flash, setFlash] = useState(false);
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);
  const router = useRouter();

  const publish = async (event, data) => {
    console.log(data);
    event.preventDefault();

    const f = new FormData();

    f.append("title", event.target.title.value);
    f.append("content", document.getElementById("contentBody").innerHTML);
    f.append("tags", event.target.tags.value);

    const res = await fetch("/api/post/create_post", {
      method: "POST",
      body: f,
    });

    const resBody = await res.json();

    if (res.status == 200) {
      setFlash(true);
      setData(resBody.status);
      setStatus(200);
      return router.push("/posts/all_posts");
    } else {
      setFlash(true);
      setData(resBody.status);
      setStatus(400);
    }
  };

  useEffect(() => {
    if (flash) {
      setTimeout(() => {
        setFlash(false);
      }, 5000);
    }
  });

  return (
    <Wrapper className={styles.container}>
      {flash && status === 200 ? (
        <Alert color="success">{data}</Alert>
      ) : flash && status === 400 ? (
        <Alert color="error">{data}</Alert>
      ) : null}
      <h1>Create Post</h1>
      <form
        action="/api/post/create_post"
        method="post"
        className={styles["form-container"]}
        name="publish"
        id="publish"
        onSubmit={publish}
      >
        <input
          type="text"
          placeholder={title}
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div
          contentEditable={true}
          onChange={() => null}
          id="contentBody"
          data-text="Content goes here."
        ></div>
        <input
          type="text"
          placeholder={tags}
          name="tags"
          id="tags"
          onChange={(e) => setTags(e.target.value)}
        />
      </form>
      <button className={styles.cancel} onClick={router.back}>
        Cancel
      </button>
      <input
        className={styles.publish}
        type="submit"
        form="publish"
        value="Publish"
      />
    </Wrapper>
  );
}
