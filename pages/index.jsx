// index.html
import { ReplaceHead } from "./app/layout/head/head";
import { Header } from "./app/layout/header/header";
import { Footer } from "./app/layout/footer/footer";
import styles from "./index.module.scss";
import HomePagePosts from "./app/home_page/fetchPosts";
import HomePageRecipes from "./app/home_page/fetchRecipes";
import Image from "next/Image";
import FLOWER_1_SVG from "./public/assets/Flower1.svg";

const title = "Home | The Vegan Blog";
const pageTitle = "The Vegan Blog";
const description =
  "The Vegan Blog is a one stop destination for all your vegan essentials";

export default function HomePage() {
  return (
    <div className={styles["home-container"]}>
      <div className={styles.intro}>
        {/* <div className={styles["svg-wrapper"]}>
          <Image className={styles["flower-1"]} src={FLOWER_1_SVG} alt="Flower" />
        </div>
        <div className={styles["svg-wrapper"]}>
          <Image className={styles["flower-1"]} src={FLOWER_1_SVG} alt="Flower" />
        </div>
        <div className={styles["svg-wrapper"]}>
          <Image className={styles["flower-1"]} src={FLOWER_1_SVG} alt="Flower" />
        </div>
        <div className={styles["svg-wrapper"]}>
          <Image className={styles["flower-1"]} src={FLOWER_1_SVG} alt="Flower" />
        </div> */}
        <p>We'd like to walk along with you on your journey to a cruelty free and
          plant inspired lifestyle. You want to know we to eat, we can tell you.</p>
      </div>
      
      <main className={styles.main}>
        <HomePagePosts />
        <HomePageRecipes />
      </main>
    </div>
  );
}
