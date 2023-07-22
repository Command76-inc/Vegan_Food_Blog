// import { Banner } from "./banner/banner";
// import { NavLinks } from "./navigation/navigation";
// import { SearchLogin } from "./search_login/search_login"
// import  styles from "./header.module.scss";
import styles from "./footer.module.scss";
import { 
  Grid, 
  Box, 
  Typography, 
  IconButton, 
  useMediaQuery, 
} from "@mui/material";

function PageTitle({ pagetitle }) {
    return <h1 className={styles.title}>{pagetitle ? pagetitle : 'The Vegan Blog'}</h1>
}

export function Footer(props) {
  const mobileScreen = useMediaQuery("(max-width: 630px)");

  return (
  <footer className={styles.footer}>
    <Grid 
      container 
      className={styles.container} 
      justifyContent="space-between" 
      spacing={2} 
      direction={ mobileScreen ? "column-reverse" : "row"}
      >
      <Grid container item className={styles["left-container"]} direction="column" justifyContent="space-between" xs>
        <Box item>
          <Typography className={styles["footer-phrase"]}>Providing guidance towards a meat-free diet and cruelty-free lifestyle.</Typography>
        </Box>
        <Box item>
          <Box className={styles["copyright-container"]}>
            <span className={styles["copyright-circle"]}></span>
            <Typography variant="h1Primary" className={styles["copyright-c"]}>c</Typography>
          </Box>
          <Typography variant="h1Primary">The Vegan Blog</Typography>
        </Box>
      </Grid>
      <Grid 
        container 
        item 
        className={styles["right-container"]} 
        direction="column" 
        justifyContent="space-between" 
        alignItems={ mobileScreen ? "flex-start" : "flex-end" } 
        xs
        >
        <Box item className={styles["social-container"]}>
          <Typography variant="h1Secondary" component="h1" className={styles["follow-us"]}>Follow Us</Typography>
          <Grid container justifyContent="space-evenly">
            <IconButton item className={styles["social-btn"]}>
              <i className="fa-brands fa-pinterest"></i>
            </IconButton>
            <IconButton item className={styles["social-btn"]}>
              <i className="fa-brands fa-twitter"></i>
            </IconButton>
            <IconButton item className={styles["social-btn"]}>
              <i className="fa-brands fa-facebook"></i>
            </IconButton>
          </Grid>
        </Box>
        <Box item>
          <Typography className={styles.contact}>totallyvegan@theveganblog.com</Typography>
        </Box>
      </Grid>
    </Grid>
  </footer>
  )
}