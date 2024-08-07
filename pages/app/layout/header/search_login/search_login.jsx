import styles from "./search_login.module.scss";

import { 
  Search as SearchIcon, 
  AccountCircle
} from "@mui/icons-material";
import { 
  TextField, 
  Button, 
  Grid, 
  IconButton 
} from "@mui/material";
import { useRef, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import DarkModeButton from "../dark_mode/dark_mode";

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
    <Grid container direction="row" className={styles.container} ref={containerRef} justifyContent="center">
      <Grid container item xs className={styles.searchContainer}>
        <Grid item xs>
          <TextField
            sx={{ 
              '& .MuiInputBase-root': {
                background: 'white', 
              }, 
              '& .MuiInputBase-input': {
                padding: '5px'
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
            size="small" 
          >
            <SearchIcon fontSize="small" />
          </Button>
        </Grid>
      </Grid>
      <Grid item>
        <DarkModeButton />
        <IconButton size="small" variant="contained" className={styles.login}>
          <AccountCircle className={styles["login-icon"]} />
        </IconButton>
      </Grid>
    </Grid>
  );
}
