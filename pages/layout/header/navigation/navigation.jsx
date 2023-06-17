import Link from "next/link";
import styles from "./navigation.module.scss";

export function NavLinks(props) {
    return (
        <nav className={styles.navigation} role="navigation">
          <ul>
            <li>        
              <Link href="/"><div>Home</div></Link>
            </li>
            <li>        
              <Link href="/posts/all_posts"><div>Blog</div></Link>
            </li>
            <li>
              <Link href="/local_dining_areas"><div>Local Dining</div></Link>
            </li>
            <li>
              <Link href="/recipes"><div>Recipes</div></Link>
            </li>
            <li>
              <Link href="/reviews"><div>Reviews</div></Link>
            </li>
            <li>
              <Link href="/about_us"><div>About Us</div></Link>
            </li>
          </ul>
        </nav>
    )
}