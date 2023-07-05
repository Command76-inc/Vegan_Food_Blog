import { Wrapper } from "../../layout/wrapper";
import styles from "../recipes.module.scss";

const title = "Recipes | The Vegan Blog";
const pageTitle = "Recipes";
const description =
  "The Vegan Blog is a one stop destination for all your vegan essentials";

export default function Recipes(props) {
  return (
    <Wrapper className={props.className}>
      <main className={styles["recipes-container"]}>
        <h2>Recipes</h2>
      </main>
    </Wrapper>
  );
}
