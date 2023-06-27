import Link from "next/link";
import styles from "../posts.module.scss";
import { ReplaceHead } from "../../layout/head/head";
import { Header } from "../../layout/header/header";
import { Wrapper } from "../../layout/wrapper";
import { Footer } from "../../layout/footer/footer";
const title = "Blog | The Vegan Blog";
const pageTitle = "Blog - All posts";
const description =
  "The Vegan Blog is a one stop destination for all your vegan essentials";
import FetchPosts from "./fetchPosts";

export default function AllPosts(props) {
  const admin = true;
  return (
    <Wrapper className={props.className}>
      <ReplaceHead
        canonical={true}
        description={description}
        title={title}
      ></ReplaceHead>
      <Header showBanner={false} />
      <main className={styles["post-container"]}>
        <h2>{pageTitle}</h2>
        {admin ? (
          <h3 className={styles.h3}>
            <Link href="/posts/create_post">Create new post</Link>
          </h3>
        ) : null}
        <FetchPosts className={styles["fetch-posts"]} />
      </main>
      <Footer />
    </Wrapper>
  );
}
