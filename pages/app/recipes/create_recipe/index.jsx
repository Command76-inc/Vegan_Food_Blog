import { Breadcrumbs, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Wrapper } from "../../layout/wrapper";
import styles from "../recipes.module.scss";
import Link from "next/link";

export default function CreateRecipe(props) {
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
          <Link href="/app/recipes/all_recipes">
            <Typography fontSize="large">All Recipes</Typography>
          </Link>
          <Typography fontSize="large">Create Recipe</Typography>
        </Breadcrumbs>
        <h2>Create Recipe</h2>
      </main>
    </Wrapper>
  );
}
