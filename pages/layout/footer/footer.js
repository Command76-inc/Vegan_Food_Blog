// import { Banner } from "./banner/banner.js";
// import { NavLinks } from "./navigation/navigation.js";
// import { SearchLogin } from "./search_login/search_login.js"
// import  styles from "./header.module.scss";
import styles from "./footer.module.scss";

function PageTitle({ pagetitle }) {
    return <h1 className={styles.title}>{pagetitle ? pagetitle : 'The Vegan Blog'}</h1>
}

export function Footer(props) {
  return (
  <footer className={styles.footer}>
    <div className="pure-g">
        <h2 class="pure-u-1 pure-u-md-1-3">Footer</h2>
        <div class="pure-u-1 pure-u-md-1-3">hdhshd<br />
        sdasdasd<br />
        sdasdasdad<br /></div>
        <div class="pure-u-1 pure-u-md-1-3">1</div>
    </div>
  </footer>
  )
}