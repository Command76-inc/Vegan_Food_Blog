import Link from "next/link";
import styles from "./all_posts.module.scss";
import { Breadcrumbs, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Wrapper } from "../../layout/wrapper";
import FetchPosts from "./fetchPosts";

const title = "Blog | The Vegan Blog";
const pageTitle = "Blog Posts";
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
        <Typography variant="h1Primary" component="h1">
          Blog Posts
        </Typography>
        {admin ? (
          <Link href="/app/posts/create_post">
            <Typography component="h3">Create new post</Typography>
          </Link>
        ) : null}
        <FetchPosts />
      </main>
    </Wrapper>
  );
}
