import { NavLinks } from "./navigation/navigation";
import { SearchLogin } from "./search_login/search_login";
import styles from "./header.module.scss";
import { Wrapper } from "../wrapper";
import { Banner } from "./banner/banner";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import Overlay from "../overlay";

function PageTitle(props) {
  return (
    <h1
      className={styles.title}
      style={!props.isSmall ? { paddingLeft: "20px", padding: "20px" } : null}
    >
      {props.pagetitle ? props.pagetitle : "The Vegan Blog"}
    </h1>
  );
}

function TinyMobile(props) {
  useEffect(props.getInitialTop, []);
  return (
    <div className={styles["small-mobile"]}>
      {parseInt(props.top.top) <= 0 ? (
        <PageTitle pagetitle={props.pagetitle} />
      ) : null}
      <div
        id="hamburger"
        className={styles.hamburger}
        onClick={props.reveal}
      ></div>
      <div
        id="offset-menu"
        className={styles["offset-menu"]}
        style={{ ...props.top }}
      >
        {!props.isSmallMobile ? (
          <PageTitle
            pagetitle={props.pagetitle}
            isSmall={props.isSmallMobile}
          />
        ) : null}

        <NavLinks reveal={props.reveal} />
        <SearchLogin />
      </div>
      {parseInt(props.top.top) >= 0 ? <Overlay /> : null}
    </div>
  );
}

function SmallMobile(props) {
  useEffect(props.getInitialTop, []);
  return (
    <div className={styles["small-mobile"]}>
      {parseInt(props.top.top) <= 0 ? (
        <PageTitle pagetitle={props.pagetitle} />
      ) : null}
      <div
        id="hamburger"
        className={styles.hamburger}
        onClick={props.reveal}
      ></div>
      <div
        id="offset-menu"
        className={styles["offset-menu"]}
        style={{ ...props.top }}
      >
        {!props.isSmallMobile ? (
          <PageTitle
            pagetitle={props.pagetitle}
            isSmall={props.isSmallMobile}
          />
        ) : null}
        <NavLinks reveal={props.reveal} />
        <SearchLogin />
      </div>
      {parseInt(props.top.top) >= 0 ? <Overlay /> : null}
    </div>
  );
}

export function Header(props) {
  const [top, setTop] = useState({ top: "-1000px" });
  const desktop = useMediaQuery("(min-width: 1150px)");
  const tablet = useMediaQuery("(min-width: 630px)");
  const smallMobile = useMediaQuery("(min-width: 416px)");

  const reveal = () => {
    const hamburger = document.getElementById("hamburger");

    if (hamburger.classList.contains(styles.active)) {
      hamburger.classList.remove(styles.active);
    } else {
      hamburger.classList.add(styles.active);
    }

    if (typeof window !== undefined) {
      const offsetMenu = document.getElementById("offset-menu");
      const height = window
        .getComputedStyle(offsetMenu)
        .getPropertyValue("height");
      let topPosition = window
        .getComputedStyle(offsetMenu)
        .getPropertyValue("top");
      if (parseInt(topPosition) >= 0) {
        setTop({ top: -parseInt(height) + 3 + "px" });
        offsetMenu.style.transition = "top 500ms ease";
      } else {
        setTop({ top: 0 });
        offsetMenu.style.transition = "top 500ms ease";
      }
    }
  };

  const getInitialTop = () => {
    if (typeof window !== undefined) {
      const offsetMenu = document.getElementById("offset-menu");
      const height = window
        .getComputedStyle(offsetMenu)
        .getPropertyValue("height");
      let topPosition = window
        .getComputedStyle(offsetMenu)
        .getPropertyValue("top");

      if (parseInt(topPosition) < 0) {
        setTop({ top: -parseInt(height) - 0 + "px" });
      }
    }
  };

  return (
    <header>
      <Wrapper>
        {desktop ? (
          <div className={styles.desktop}>
            <PageTitle pagetitle={props.pagetitle} />
            <NavLinks reveal={null} />
            <SearchLogin />
          </div>
        ) : tablet ? (
          <div className={styles.tablet}>
            <PageTitle pagetitle={props.pagetitle} isSmallMobile={false} />
            <NavLinks reveal={null} />
            <SearchLogin />
          </div>
        ) : smallMobile ? (
          <SmallMobile
            pagetitle={props.pagetitle}
            reveal={reveal}
            top={top}
            getInitialTop={getInitialTop}
            isSmallMobile={tablet}
          />
        ) : (
          <TinyMobile
            pagetitle={props.pagetitle}
            reveal={reveal}
            top={top}
            getInitialTop={getInitialTop}
            isSmallMobile={tablet}
          />
        )}
      </Wrapper>
      <Banner showBanner={props.showBanner}></Banner>
    </header>
  );
}
