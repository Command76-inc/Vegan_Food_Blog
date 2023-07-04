import styles from "./index.module.scss";

export default function HomePageRecipes() {
  return (
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
  );
}
