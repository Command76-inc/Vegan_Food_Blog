import styles from "./search_login.module.scss";
import { useRef, useEffect } from "react";

const navLinks = {
  home: "./",
  blog: "./blog",
  dining: "./dining",
  recipes: "./recipes",
  reviews: "./reviews",
};

function buildLinks(linksObject) {
  let linksArray = [];
  for (let context in linksObject) {
    linksArray.push(<a href={linksObject[context]}>{context}</a>);
  }
  return linksArray;
}

export function SearchLogin(props) {
  const containerRef = useRef(null);
  const getWidth = () => {
    if (containerRef.current === null) {
    } else {
      console.log(
        window.getComputedStyle(containerRef.current).getPropertyValue("width")
      );
    }
  };

  useEffect(function mount() {
    window.addEventListener("resize", getWidth);

    return function unMount() {
      window.removeEventListener("resize", getWidth);
    };
  });

  return (
    <div className={styles.container} ref={containerRef}>
      {getWidth()}
      <input type="text" placeholder="Search..." className={styles.searchbar} />
      <span className={styles.login}>Login</span>
    </div>
  );
}
