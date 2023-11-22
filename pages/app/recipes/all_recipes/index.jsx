import { Wrapper } from "../../layout/wrapper";
import styles from "../recipes.module.scss";
import { Breadcrumbs, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";
import { useEffect, useState } from "react";

const title = "Recipes | The Vegan Blog";
const pageTitle = "Recipes";
const description =
  "The Vegan Blog is a one stop destination for all your vegan essentials";

export default function Recipes(props) {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(true);

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
    return populateRecipes();
  }, []);

  if (loading) {
    <p>...Loading</p>;
  }
  if (!recipes) {
    return <p>No recipes data!</p>;
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
          <Typography fontSize="large">All Recipes</Typography>
        </Breadcrumbs>
        <h2>All Recipes</h2>
        {
          // Seems that React doesn't like being passed an non-bool attribute as a bool
          // May have to make db adjustment, remove empty arr and pass default in place of empty arr
        }
      </main>
    </Wrapper>
  );
}
