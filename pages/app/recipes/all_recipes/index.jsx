import { Wrapper } from "../../layout/wrapper";
import styles from "../recipes.module.scss";
import { Breadcrumbs, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";

const title = "Recipes | The Vegan Blog";
const pageTitle = "Recipes";
const description =
  "The Vegan Blog is a one stop destination for all your vegan essentials";

export default function Recipes(props) {
  return (
    <Wrapper className={props.className}>
      <main className={styles["recipes-container"]}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="large" />}
          aria-label="breadcrumb"
        >
          <Link href="/">
            <Typography fontSize="large">Home</Typography>
          </Link>
          <Typography fontSize="large">All Recipes</Typography>
        </Breadcrumbs>
        <h2>All Recipes</h2>
      </main>
    </Wrapper>
  );
}
