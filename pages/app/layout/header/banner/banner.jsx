import { Wrapper } from "../../wrapper";
import styles from "./banner_styles.module.scss";

var ShowBanner = <Wrapper className={styles.banner}></Wrapper>;

export function Banner(props) {
  if (props.showBanner) {
    ShowBanner = (
      <Wrapper className={styles.banner}>
        <div className={styles["slogan-container"]}>
          <div className={styles.slogan}>Ignore the meat</div>
          <div className={styles.slogan2}>Totally vegan</div>
        {/* <p className="description">
          We'd like to walk along with you on your journey to a cruelty free and
          plant inspired lifestyle. You want to know we to eat, we can tell you.
        </p> */}
        </div>
      </Wrapper>
    );
  } else {
    ShowBanner = null;
  }
  return ShowBanner;
}