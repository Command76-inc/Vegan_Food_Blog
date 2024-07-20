import { Breadcrumbs, Item, Grid, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Wrapper } from "../../layout/wrapper";
import styles from "../recipes.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SingleRecipe(props) {
  const params = typeof window !== "undefined" ? window.location.search : Error;
  const recipe = new URLSearchParams(params).getAll("id")[0];
  const [data, setData] = useState("Recipe");
  useEffect(() => {
    (async () => {
      const url = `/api/recipes/get_single_recipe?id=${recipe}`;
      console.log(url);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, []);
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
        <Link href="#">Update Recipe</Link>
        <Grid container>
          <Grid item xs={8}>
            <Grid container direction="column" style={{ height: "100%" }}>
              <Grid item>
                <h1 style={{ background: "pink" }}>{data.title}</h1>
              </Grid>
              <Grid item>
                <div style={{ background: "teal" }}>testing</div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid
              container
              direction="row"
              alignItems="flex-start"
              style={{ backgroundColor: "yellow", height: "100%" }}
            >
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={6}>
                    <div style={{ "text-align": "right" }}>Prep Time:</div>
                  </Grid>
                  <Grid item xs={6}>
                    <div
                      style={{ "text-align": "right", background: "orange" }}
                    >
                      {data.prep_time}
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={6}>
                    <div style={{ "text-align": "right" }}>Ingredients:</div>
                  </Grid>
                  <Grid item xs={6}>
                    <div style={{ "text-align": "right", background: "lime" }}>
                      {data.ingredients}
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={6}>
                    <div style={{ background: "gray", "text-align": "right" }}>
                      Cook Time:
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div style={{ "text-align": "right", background: "green" }}>
                      {data.cook_time}
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </Wrapper>
  );
}
