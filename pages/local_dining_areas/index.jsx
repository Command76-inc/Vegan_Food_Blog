import { ReplaceHead } from "../layout/head/head";
import { Header } from "../layout/header/header";
import { Wrapper } from "../layout/wrapper";
import { Footer } from "../layout/footer/footer";
import styles from "./local_dining_areas.module.scss";

const title = "Local Dining | The Vegan Blog";
const pageTitle = "Local Dining";
const description =
  "The Vegan Blog is a one stop destination for all your vegan essentials";

export default function LocalDiningAreas(props) {
  return (
    <Wrapper className={props.className}>
      <ReplaceHead
        canonical={true}
        description={description}
        title={title}
      ></ReplaceHead>
      <Header showBanner={false} />
      <main class={styles["local-dining-areas-container"]}>
        <h2>Local Dining</h2>
      </main>
      <Footer />
    </Wrapper>
  );
}
