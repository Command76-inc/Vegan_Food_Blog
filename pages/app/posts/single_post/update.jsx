import { Wrapper } from "../../layout/wrapper";
import { Alert, Breadcrumbs, TextField, Typography } from "@mui/material";
import { TextareaAutosize } from "@mui/base";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import styles from "./single_post.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/Image";

export default function UpdatePost() {
  const [flash, setFlash] = useState(false);
  const [status, setStatus] = useState(null);
  const router = useRouter();

  const headerRef = useRef(null);
  const [data, setData] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("Getting Tags");
  const [headerImage, setHeaderImage] = useState(null);
  const [headerImagePreview, setHeaderImagePreview] = useState("");

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
        setTitle(data.title);
        setContent(data.content);
        setTags(data.tags);
        setHeaderImagePreview(`/uploads/${data.headerImagePath}`);
        setLoading(false);
      })
      .catch((error) => console.error("Error: ", error));
  }, []);

  const publishUpdate = async (event, data) => {
    event.preventDefault();
    const f = new FormData();

    f.append("id", getIdFromUrl());
    f.append("title", title);
    f.append("content", content);
    f.append("tags", tags);
    if (headerImage) {
      f.append("headerImage", headerImage);
    }

    const res = await fetch("/api/post/update_single_post", {
      method: "PUT",
      body: f,
    });

    const resBody = await res.json();

    setFlash(true);
    setData(resBody.status);

    if (res.status == 200) {
      setStatus(200);
    } else {
      setStatus(400);
    }
  };

  useEffect(() => {
    if (flash) {
      setTimeout(() => {
        setFlash(false);

        if (status === 200) {
          return router.push(`/app/posts/single_post?id=${getIdFromUrl()}`);
        }
      }, 5000);
    }
  }, [status]);

  // This is for image preview of header
  useEffect(() => {
    setHeaderImagePreview(
      headerImage
        ? URL.createObjectURL(headerImage)
        : `/uploads/${headerImagePreview}`
    );
  }, [headerImage]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No Post Data</p>;

  return (
    <Wrapper className={styles.container}>
      {flash && status === 200 ? (
        <Alert color="success">{data}</Alert>
      ) : flash && status === 400 ? (
        <Alert color="error">{data}</Alert>
      ) : null}
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="large" />}
        aria-label="breadcrumb"
      >
        <Link href="/">
          <Typography fontSize="large">Home</Typography>
        </Link>
        <Link href="/app/posts/all_posts">
          <Typography fontSize="large">All Posts</Typography>
        </Link>
        <Link href={`/app/posts/single_post?id=${getIdFromUrl()}`}>
          <Typography fontSize="large">Single Post</Typography>
        </Link>
        <Typography fontSize="large">Update Post</Typography>
      </Breadcrumbs>
      <h1>{data.title}</h1>
      <form
        action="/api/post/update_single_post"
        method="put"
        className={styles["form-container"]}
        name="update"
        id="update"
        onSubmit={publishUpdate}
      >
        <div style={{ position: "relative", width: "100%", height: "300px" }}>
          <Image
            src={headerImagePreview}
            alt="header image"
            layout="fill"
            className={styles["header-image"]}
            objectFit="cover"
          />
        </div>
        <input
          className={styles["header-image-upload"]}
          type="file"
          onChange={(e) => {
            setHeaderImage(e.target.files[0]);
          }}
        />
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />
        <TextareaAutosize
          id="contentBody"
          // ref={bodyContent}
          className={`${styles.content} ${styles.input}`}
          onChange={(e) => setContent(e.target.value)}
          value={content}
          minRows={10}
        />
        <TextField
          placeholder={tags}
          name="tags"
          id="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          fullWidth
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
