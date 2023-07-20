import { Box } from "@mui/material";
import { Wrapper } from "../../wrapper";
import styles from "./banner_styles.module.scss";

var ShowBanner = <Wrapper className={styles.banner}></Wrapper>;

export function Banner(props) {
  if (props.showBanner) {
    ShowBanner = (
      <Wrapper className={styles.banner}>
        <Box className={styles["slogan-container"]}>
          <Box className={styles["slogan-words-container"]}>
            <div className={styles.slogan}>Ignore the meat</div>
            <div className={styles.slogan2}>Totally vegan</div>
          </Box>
        </Box>
      </Wrapper>
    );
  } else {
    ShowBanner = null;
  }
  return ShowBanner;
}