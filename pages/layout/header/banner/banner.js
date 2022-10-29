import { Wrapper } from "../../wrapper.js"
import styles from "./banner_styles.module.scss"

var ShowBanner = <Wrapper className={styles.banner}></Wrapper>

export function Banner(props) {
    if (props.showBanner) { ShowBanner = <Wrapper className={styles.banner}></Wrapper>} else { ShowBanner = ""};
    return ShowBanner
}