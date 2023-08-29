import Link from "next/link";
import styles from "./all_posts.module.scss";
import { Breadcrumbs, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Wrapper } from "../../layout/wrapper";
import FetchPosts from "./fetchPosts";

const title = "Blog | The Vegan Blog";
const pageTitle = "Blog - All posts";
const description =
  "The Vegan Blog is a one stop destination for all your vegan essentials";

export default function AllPosts(props) {
  const admin = true;
  return (
    <Wrapper className={props.className}>
      <main className={styles["post-container"]}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="large" />}
          aria-label="breadcrumb"
        >
          <Link href="/">
            <Typography fontSize="large">Home</Typography>
          </Link>
          <Typography fontSize="large">All Posts</Typography>
        </Breadcrumbs>
        <h2>{pageTitle}</h2>
        {admin ? (
          <h3 className={styles.h3}>
            <Link href="/app/posts/create_post">Create new post</Link>
          </h3>
        ) : null}
        <FetchPosts className={styles["fetch-posts"]} />
      </main>
    </Wrapper>
  );
}
