import { Wrapper } from "../../layout/wrapper";
import styles from "../recipes.module.scss";
import pageStyles from "./all_recipes.module.scss";
import { Breadcrumbs, Typography, Grid, Item, Pagination } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const title = "Recipes | The Vegan Blog";
const pageTitle = "Recipes";
const description =
  "The Vegan Blog is a one stop destination for all your vegan essentials";

export default function Recipes(props) {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [pages, setPages] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function getRecipes() {
      const response = await fetch(
        "http://localhost:3000/api/recipes/get_recipes",
        {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
          },
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();

      data.forEach((item) => {
        if (item.comments.length === 0) {
          delete item.comments;
          item.comments = "No comments";
        }
      });
      return data;
    }
    async function populateRecipes() {
      const data = await getRecipes();
      setRecipes(data);
      setLoading(false);
    }
    populateRecipes();
  }, []);

  if (loading) {
    <p>...Loading</p>;
  }
  if (!recipes) {
    return <p>No recipes data!</p>;
  }

  const changePage = (e, value) => {
    setPage(value);
  };

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
        <Typography variant="h1">All Recipes</Typography>
        <Grid
          container
          direction="row"
          style={{ margin: "12px" }}
          rowSpacing={5}
          alignContent={"center"}
        >
          {recipes
            .map((el) => (
              <Grid item xs={3}>
                <Link
                  href={`http://localhost:3000/app/recipes/single_recipe?id=${el.id}`}
                >
                  <Grid container direction="column" class={pageStyles["recipe-container"]}>
                    <Grid item align="center">
                      <Image src={el.dish_image_path} width={100} height={100} />
                    </Grid>
                    <Grid item align="center">
                      {el.title}
                    </Grid>
                  </Grid>
                </Link>
              </Grid>
            ))
            .slice(page * 12, page * 12 + 12)}
        </Grid>
        <Pagination
          count={Math.floor(recipes.length / 12)}
          page={page}
          onChange={changePage}
        ></Pagination>
      </main>
    </Wrapper>
  );
}
