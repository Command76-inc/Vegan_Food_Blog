import { ReplaceHead } from "../layout/head/head";
import { Header } from "../layout/header/header";
import { Wrapper } from "../layout/wrapper";
import { Footer } from "../layout/footer/footer";
import styles from "./reviews.module.scss";

const title = "Reviews | The Vegan Blog";
const pageTitle = "Reviews";
const description =
  "The Vegan Blog is a one stop destination for all your vegan essentials";

export default function Reviews(props) {
  return (
    <Wrapper className={props.className}>
      {/* <ReplaceHead
        canonical={true}
        description={description}
        title={title}
      ></ReplaceHead>
      <Header showBanner={false} /> */}
      <main className={styles["reviews-container"]}>
        <h2>Reviews</h2>
      </main>
      {/* <Footer /> */}
    </Wrapper>
  );
}
