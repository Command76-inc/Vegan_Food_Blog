import { NavLinks } from "./navigation/navigation";
import { SearchLogin } from "./search_login/search_login";
import styles from "./header.module.scss";
import { Wrapper } from "../wrapper";
import { Banner } from "./banner/banner";
import { useMediaQuery } from "@mui/material";

function PageTitle({ pagetitle }) {
  return (
    <h1 className={styles.title}>{pagetitle ? pagetitle : "The Vegan Blog"}</h1>
  );
}

export function Header(props) {
  const matches = useMediaQuery("(min-width: 1150px)");

  return (
    <header>
      <Wrapper>
        <div className={matches ? styles.desktop : styles.tablet}>
          <PageTitle pagetitle={props.pagetitle} />
          <NavLinks />
          <SearchLogin />
        </div>
      </Wrapper>

      <Banner showBanner={props.showBanner}></Banner>
    </header>
  );
}
