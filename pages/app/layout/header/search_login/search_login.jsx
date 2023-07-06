import styles from "./search_login.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import { 
  TextField, 
  Button, 
  Grid
} from "@mui/material";
import { useRef, useEffect } from "react";
import { useMediaQuery } from "@mui/material";

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
    <Grid container className={styles.container} ref={containerRef}>
      {getWidth()}
      <Grid container item xs={10} direction="row" className={styles.searchContainer}>
        <Grid item xs={9}>
        <TextField
          sx={{ 
            '& .MuiInputBase-root': {
              background: 'white', 
            }, 
            '& .MuiInputBase-input': {
              padding: '10px 10px'
            }
          }}
          fullWidth 
          placeholder="Search..."
          className={styles.searchbar}
        />
        </Grid>
        <Grid item>
        <Button
          variant="outlined"
          className={styles.searchBtn}
        >
          <SearchIcon fontSize="medium" />
        </Button>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Button className={styles.login}>Login</Button>
      </Grid>
    </Grid>
  );
}
