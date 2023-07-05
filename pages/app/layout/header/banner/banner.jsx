import { Wrapper } from "../../wrapper";
import styles from "./banner_styles.module.scss";

var ShowBanner = <Wrapper className={styles.banner}></Wrapper>;

export function Banner(props) {
  if (props.showBanner) {
    ShowBanner = (
      <Wrapper className={styles.banner}>
        <h2 className="h2">Let's be Vegan together.</h2>
        <p className="description">
          We'd like to walk along with you on your journey to a cruelty free and
          plant inspired lifestyle. You want to know we to eat, we can tell you.
        </p>
      </Wrapper>
    );
  } else {
    ShowBanner = null;
  }
  return ShowBanner;
}