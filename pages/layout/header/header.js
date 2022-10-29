import { Banner } from "./banner/banner.js";
import { NavLinks } from "./navigation/navigation.js";
import { SearchLogin } from "./search_login/search_login.js"
import  styles from "./header.module.scss";

function PageTitle({ pagetitle }) {
    return <h1 className={styles.title}>{pagetitle ? pagetitle : 'The Vegan Blog'}</h1>
}

export function Header(props) {
  return (
  <header>
    <div className={styles.topbar}>
      <PageTitle pagetitle={props.pagetitle} />
      <NavLinks />
      <SearchLogin />
    </div>
    <Banner showBanner={props.showBanner}></Banner>
  </header>
  )
}
