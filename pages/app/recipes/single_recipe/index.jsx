import {
  Breadcrumbs,
  Item,
  Grid,
  Typography,
  Divider,
  List,
  ListItem,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Wrapper } from "../../layout/wrapper";
import styles from "../recipes.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SingleRecipe(props) {
  const params =
    typeof window !== "undefined"
      ? window.location.search
      : console.log("something went wrong!");
  const recipe = new URLSearchParams(params).getAll("id")[0];
  const [data, setData] = useState("Recipe");
  useEffect(() => {
    (async () => {
      const url = `/api/recipes/get_single_recipe?id=${recipe}`;
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
    let steps = data.steps.map((step) => (
      <ListItem divider="true">{step}</ListItem>
    ));
    return <List>{steps}</List>;
  }

  function DirectionsList(data) {
    let steps = data.steps.map((step) => (
      <ListItem divider="true">{step}</ListItem>
    ));
    return <List>{steps}</List>;
  }

  function IngredientsList(data) {
    let ingredients = data.ingredients.map((ingredient) => (
      <ListItem divider="true">{ingredient}</ListItem>
    ));
    return <List>{ingredients}</List>;
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
        <Grid container direction="row">
          <Grid item xs={7}>
            <Grid container direction="column" style={{ height: "100%" }}>
              <Grid item>
                <Typography variant="h1">
                  <span style={{ borderBottom: "8px solid green" }}>
                    {data.title}
                  </span>
                </Typography>
              </Grid>
              <Grid item>
                <Grid container>
                  <Grid item style={{ paddingTop: "12px" }}>
                    <Typography variant="h5">
                      ***** Ratings and Favorited
                    </Typography>
                    {/* reviews stars go here */}
                  </Grid>
                  <Grid item>{/* favorite icon goes here */}</Grid>
                  <Grid item>{/* number of times favorites goes here */}</Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Grid
              container
              direction="row"
              alignItems="flex-start"
              style={{ height: "100%" }}
            >
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={4}>
                    <Typography variant="h5" align="right">
                      Prep Time:
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="h5" align="left">
                      &nbsp;{data.prep_time}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={4}>
                    <Typography variant="h5" align="right">
                      Ingredients:
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="h5" align="left">
                      &nbsp;{data.ingredients}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={4}>
                    <Typography variant="h5" align="right">
                      &nbsp;Cook Time:
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="h5" align="left">
                      &nbsp;{data.cook_time}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={6} style={{ minHeight: "250px" }}>
                <Grid container direction="column">
                  <Grid item>
                    {/* Description goes here */}
                    <Typography variant="h2">
                      <span style={{ borderBottom: "6px solid green" }}>
                        Description
                      </span>
                    </Typography>
                    <Typography variant="body1" style={{ paddingTop: "12px" }}>
                      {data.description}
                    </Typography>
                  </Grid>
                  <Grid item>
                    {/* Ingredients go here */}
                    <Typography variant="h2">
                      <span style={{ borderBottom: "6px solid green" }}>
                        Ingredients
                      </span>
                    </Typography>
                    {Array.isArray(data.ingredient) ? (
                      <IngredientsList ingredients={data.ingredient} />
                    ) : (
                      <p>Loading ingredients</p>
                    )}
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
                    style={{ border: "4px solid #000" }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container direction="row">
              <Grid item xs={6}>
                {/* Cooking prep goes here */}
                <Typography variant="h2">
                  <span style={{ borderBottom: "6px solid green" }}>Prep</span>
                </Typography>
                {Array.isArray(data.prep) ? (
                  <PrepsList steps={data.prep} />
                ) : (
                  <p>Loading prep steps</p>
                )}
              </Grid>
              <Grid item xs={6}>
                {/* Cooking instructions go here */}
                <Typography variant="h2">
                  <span style={{ borderBottom: "6px solid green" }}>
                    Directions
                  </span>
                </Typography>
                {Array.isArray(data.directions) ? (
                  <DirectionsList steps={data.directions} />
                ) : (
                  <p>Loading cooking directions</p>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2">
              <span style={{ borderBottom: "6px solid green" }}>
                Similar Recipes
              </span>
            </Typography>
            <Grid container direction="row">
              <Grid item xs={3}>
                1
              </Grid>
              <Grid item xs={3}>
                2
              </Grid>
              <Grid item xs={3}>
                3
              </Grid>
              <Grid item xs={3}>
                4
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2">
              <span style={{ borderBottom: "6px solid green" }}>
                Interesting Blog Posts
              </span>
            </Typography>
            <Grid container direction="row">
              <Grid item xs={3}>
                1
              </Grid>
              <Grid item xs={3}>
                2
              </Grid>
              <Grid item xs={3}>
                3
              </Grid>
              <Grid item xs={3}>
                4
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </Wrapper>
  );
}
