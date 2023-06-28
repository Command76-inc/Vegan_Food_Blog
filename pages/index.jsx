// index.html
import { ReplaceHead } from "./layout/head/head";
import { Header } from "./layout/header/header";
import { Footer } from "./layout/footer/footer";
import styles from "./index.module.scss";
const title = "Home | The Vegan Blog";
const pageTitle = "The Vegan Blog";
const description = "The Vegan Blog is a one stop destination for all your vegan essentials";
export default function HomePage() {
  return (
      <div>
        <ReplaceHead canonical={true} description={description} title={title}></ReplaceHead>
        <Header pagetitle={pageTitle} showBanner={true}/>
        <main className={styles.main}>
          <section className={styles.section}>
            <h3 className={styles.sectionHeading}>Latest Blog</h3>
            <div className="pure-g">
              <article className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <div className={styles.article}>
                  <div>1</div>
                </div>
              </article>
              <article className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <div className={styles.article}>
                  <div>1</div>
                </div>
              </article>
              <article className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <div className={styles.article}>
                  <div>1</div>
                </div>
              </article>
              <article className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <div className={styles.article}>
                  <div>1</div>
                </div>
              </article>
            </div>
          </section>
          <section className={styles.section}>
            <h3 className={styles.sectionHeading}>Most Read Recipes</h3>
            <div className="pure-g">
              <article className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <div className={styles.article}>
                  <div>1</div>
                </div>
              </article>
              <article className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <div className={styles.article}>
                  <div>1</div>
                </div>
              </article>
              <article className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <div className={styles.article}>
                  <div>1</div>
                </div>
              </article>
              <article className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <div className={styles.article}>
                  <div>1</div>
                </div>
              </article>
            </div>
          </section>
        </main>
        <Footer></Footer>
      </div>
  )
}

