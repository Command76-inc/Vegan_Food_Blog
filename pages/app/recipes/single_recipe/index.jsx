import { Breadcrumbs, Item, Grid, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Wrapper } from "../../layout/wrapper";
import styles from "../recipes.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

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

  function PrepsList(data) {
      const steps = data.steps.map((step) => (
        <li>{step}</li>
      ));
      return <ol>{steps}</ol>;
    }

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
        <Grid container direction="column">
          <Grid item xs={8}>
            <Grid container direction="column" style={{ height: "100%" }}>
              <Grid item>
                <h1 style={{ background: "pink" }}>{data.title}</h1>
              </Grid>
              <Grid item>
                <Grid container>
                  <Grid item>
                    <div style={{ background: "teal" }}>
                      ratings and favorited
                    </div>
                    {/* reviews stars go here */}
                  </Grid>
                  <Grid item>{/* favorite icon goes here */}</Grid>
                  <Grid item>{/* number of times favorites goes here */}</Grid>
                </Grid>
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
          <Grid item>
            <Grid container>
              <Grid item xs={6} style={{ minHeight: "250px" }}>
                <Grid container direction="column">
                  <Grid item>
                    {/* Description goes here */}
                    <div>Descriptions</div>
                  </Grid>
                  <Grid item>
                    {/* Ingredients go here */}
                    <div>Ingredients</div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid item>
                  <Image
                    src={data.dish_image}
                    width={250}
                    height={250}
                    alt="Picture of the author"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="row">
              <Grid item xs={6}>
                {/* Cooking prep goes here */}
                <div>Prep</div>
                {Array.isArray(data.prep) ? <PrepsList steps={data.prep} />: <p>Loading prep steps</p>}
              </Grid>
              <Grid item xs={6}>
                {/* Cooking instructions go here */}
                <div>Directions</div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </Wrapper>
  );
}
