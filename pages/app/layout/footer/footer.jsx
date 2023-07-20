// import { Banner } from "./banner/banner";
// import { NavLinks } from "./navigation/navigation";
// import { SearchLogin } from "./search_login/search_login"
// import  styles from "./header.module.scss";
import styles from "./footer.module.scss";
import { 
  Grid, 
  Box, 
  Typography 
} from "@mui/material";

function PageTitle({ pagetitle }) {
    return <h1 className={styles.title}>{pagetitle ? pagetitle : 'The Vegan Blog'}</h1>
}

export function Footer(props) {
  return (
  <footer className={styles.footer}>
    <Grid container className={styles.container} justifyContent="space-between" sx={{ "min-height": "200px" }}>
      <Grid container item className={styles["left-container"]} direction="column" justifyContent="space-between" xs>
        <Box item>
          <Typography>Providing guidance towards a meat-free diet and cruelty-free lifestyle.</Typography>
        </Box>
        <Box item>
          <Box className={styles["copyright-container"]}>
            <span className={styles["copyright-circle"]}></span>
            <Typography variant="h1Primary" className={styles["copyright-c"]}>c</Typography>
          </Box>
          <Typography variant="h1Primary">The Vegan Blog</Typography>
        </Box>
      </Grid>
      <Grid container item className={styles["right-container"]} direction="column" justifyContent="space-between" alignItems="flex-end" xs>
        <Box item>1</Box>
        <Box item>2</Box>
      </Grid>
    </Grid>
  </footer>
  )
}