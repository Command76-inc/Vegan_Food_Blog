import { ReplaceHead } from "../layout/head/head";
import { Header } from "../layout/header/header";
import { Wrapper } from "../layout/wrapper";
import { Footer } from "../layout/footer/footer";
import styles from "./recipes.module.scss";

const title = "Recipes | The Vegan Blog";
const pageTitle = "Recipes";
const description =
  "The Vegan Blog is a one stop destination for all your vegan essentials";

export default function Recipes(props) {
  return (
    <Wrapper className={props.className}>
      {/* <ReplaceHead
        canonical={true}
        description={description}
        title={title}
      ></ReplaceHead>
      <Header showBanner={false} /> */}
      <main className={styles["recipes-container"]}>
        <h2>Recipes</h2>
      </main>
      {/* <Footer /> */}
    </Wrapper>
  );
}
