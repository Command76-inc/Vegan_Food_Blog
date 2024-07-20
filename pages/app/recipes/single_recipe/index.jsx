import { Breadcrumbs, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Wrapper } from "../../layout/wrapper";
import styles from "../recipes.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SingleRecipe(props) {
  const params = typeof window !== "undefined" ? window.location.search: Error;
  const recipe = new URLSearchParams(params).getAll("id")[0]
  const [data, setData] = useState("Recipe")
  useEffect(() => {
   (async () => {
    const url = `/api/recipes/get_single_recipe?id=${recipe}`;
    console.log(url)
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
      setData(json)
    } catch (error) {
      console.error(error.message);
    }
  })()
  }, [])
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
          <Typography fontSize="large">Single Recipe</Typography>
        </Breadcrumbs>
        <h2>Single Recipe</h2>
        <h1>{data.title}</h1>
      </main>
    </Wrapper>
  );
}
