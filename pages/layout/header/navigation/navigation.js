import Link from "next/link";
import styles from "./navigation.module.scss";

export function NavLinks(props) {
    return (
        <nav className={styles.navigation} role="navigation">
          <ul>
            <li>        
              <Link href="/">Home</Link>
            </li>
            <li>        
              <Link href="/posts/all_posts">Blog</Link>
            </li>
            <li>
              <Link href="/local_dining_areas">Local Dining</Link>
            </li>
            <li>
              <Link href="/recipes">Recipes</Link>
            </li>
            <li>
              <Link href="/reviews">Reviews</Link>
            </li>
            <li>
              <Link href="/about_us">About Us</Link>
            </li>
          </ul>
        </nav>
    )
}