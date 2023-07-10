import { Breadcrumbs, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Wrapper } from "../../layout/wrapper";
import styles from "../recipes.module.scss";
import Link from "next/link";

export default function UpdateRecipe(props) {
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
          <Link href={`/app/recipes/single_recipe?id=${"MongoDB recipe id goes here"}`}>
            <Typography fontSize="large">Single Recipe</Typography>
          </Link>
          <Typography fontSize="large">Update Recipe</Typography>
        </Breadcrumbs>
        <h2>Update Recipe</h2>
      </main>
    </Wrapper>
  );
}
