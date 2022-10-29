import styles from "./search_login.module.scss"

const navLinks = {
    home: "./",
    blog: "./blog",
    dining: "./dining",
    recipes: "./recipes",
    reviews: "./reviews" 
}

function buildLinks(linksObject) {
  let linksArray = []
  for (let context in linksObject) {
    linksArray.push(<a href={linksObject[context]}>{context}</a>)
  };
  return linksArray
}

export function SearchLogin(props) {
    return (
        <div className={styles.container}>
            <input type="text" placeholder="Search..." className={styles.searchbar}/>
            <span className={styles.login}>Login</span>
        </div>
    )
}