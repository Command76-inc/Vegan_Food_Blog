// index.html
import styles from "./index.module.scss";
import HomePagePosts from "./app/home_page/fetchPosts";
import HomePageRecipes from "./app/home_page/fetchRecipes";
import Image from "next/Image";
// import FLOWER_1_SVG from "./public/assets/Asset1.svg";
import BRANCH_1_SVG from "/public/assets/Branch1.svg";
import { Typography } from "@mui/material";

const title = "Home | The Vegan Blog";
const pageTitle = "The Vegan Blog";
const description =
  "The Vegan Blog is a one stop destination for all your vegan essentials";

export default function HomePage() {
  return (
    <div className={styles["home-container"]}>
      <div className={styles.intro}>
        <div className={styles["svg-wrapper"]}>
          <Image
            className={styles["flower-1"]}
            src={BRANCH_1_SVG}
            alt="Flower"
          />
        </div>
        <div className={styles["svg-wrapper"]}>
          <Image
            className={styles["flower-1"]}
            src={BRANCH_1_SVG}
            alt="Flower"
          />
        </div>
        <div className={styles["svg-wrapper"]}>
          <Image
            className={styles["flower-1"]}
            src={BRANCH_1_SVG}
            alt="Flower"
          />
        </div>
        <div className={styles["svg-wrapper"]}>
          <Image
            className={styles["flower-1"]}
            src={BRANCH_1_SVG}
            alt="Flower"
          />
        </div>
        <Typography variant="h1Primary" component="p">
          We'd like to walk along with you on your journey to a cruelty-free and
          plant-inspired lifestyle. If you want to know what to eat, we can tell
          you.
        </Typography>
      </div>

      <main className={styles.main}>
        <HomePagePosts />
        <HomePageRecipes />
      </main>
    </div>
  );
}
