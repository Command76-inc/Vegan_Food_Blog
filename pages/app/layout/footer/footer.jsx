// import { Banner } from "./banner/banner";
// import { NavLinks } from "./navigation/navigation";
// import { SearchLogin } from "./search_login/search_login"
// import  styles from "./header.module.scss";
import styles from "./footer.module.scss";

function PageTitle({ pagetitle }) {
    return <h1 className={styles.title}>{pagetitle ? pagetitle : 'The Vegan Blog'}</h1>
}

export function Footer(props) {
  return (
  <footer className={styles.footer}>
    <div className="pure-g">
        <h2 className="pure-u-1 pure-u-md-1-3">Footer</h2>
        <div className="pure-u-1 pure-u-md-1-3"><a href="https://www.vecteezy.com/free-vector/flower">Flower Vectors by Vecteezy</a></div>
        <div className="pure-u-1 pure-u-md-1-3">1</div>
    </div>
  </footer>
  )
}