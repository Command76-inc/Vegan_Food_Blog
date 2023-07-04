// index.html
import { ReplaceHead } from "./app/layout/head/head";
import { Header } from "./app/layout/header/header";
import { Footer } from "./app/layout/footer/footer";
import styles from "./index.module.scss";
import HomePagePosts from "./app/home_page/fetchPosts";
import HomePageRecipes from "./app/home_page/fetchRecipes";

const title = "Home | The Vegan Blog";
const pageTitle = "The Vegan Blog";
const description =
  "The Vegan Blog is a one stop destination for all your vegan essentials";

export default function HomePage() {
  return (
    <div>
      {/* <ReplaceHead
        canonical={true}
        description={description}
        title={title}
      ></ReplaceHead> */}
      {/* <Header pagetitle={pageTitle} showBanner={true} /> */}
      <main className={styles.main}>
        <HomePagePosts />
        <HomePageRecipes />
      </main>
      {/* <Footer></Footer> */}
    </div>
  );
}
