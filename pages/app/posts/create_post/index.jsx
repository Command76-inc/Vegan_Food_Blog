import { Wrapper } from "../../layout/wrapper";
import { Alert, Breadcrumbs, TextField, Typography } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import styles from "./create_posts.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CreatePosts() {
  const [headerImage, setHeaderImage] = useState(null);
  const [headerImagePreview, setHeaderImagePreview] = useState(undefined);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [flash, setFlash] = useState(false);
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);
  const router = useRouter();

  const publish = async (event, data) => {
    event.preventDefault();

    const f = new FormData();

    f.append("title", title);
    f.append("content", content);
    f.append("tags", tags);
    if (headerImage) {
      f.append("headerImage", headerImage);
    }

    const res = await fetch("/api/post/create_post", {
      method: "POST",
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
          return router.push("/app/posts/all_posts");
        }
      }, 5000);
    }
  });

  useEffect(() => {
    setHeaderImagePreview(headerImage ? URL.createObjectURL(headerImage) : undefined);
  }, [headerImage])

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
        <Typography fontSize="large">Create Post</Typography>
      </Breadcrumbs>
      <h1>Create Post</h1>
      { headerImagePreview && (
        <div style={{ position: 'relative', width: '100%', height: '300px' }}>
          <Image 
            src={headerImagePreview}
            alt="header image" 
            layout="fill"
            className={styles["header-image"]}
            objectFit="cover"
          />
        </div>
      )}
      <form
        action="/api/post/create_post"
        method="post"
        encType="multipart/form-data" 
        className={styles["form-container"]}
        name="publish"
        id="publish"
        onSubmit={publish}
      >
        <input 
          className={styles["header-image-upload"]} 
          type="file" 
          onChange={(e) => setHeaderImage(e.target.files[0])} 
        />
        <TextField
          type="text"
          placeholder="Set title" 
          name="title"
          id="title" 
          className={styles.input}
          fullWidth 
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextareaAutosize 
          id="contentBody" 
          className={`${styles.content} ${styles.input}`} 
          onChange={(e) => setContent(e.target.value)} 
          minRows={10} 
        />
        <TextField
          type="text"
          placeholder="Set tags" 
          name="tags"
          id="tags" 
          className={styles.input} 
          fullWidth 
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
