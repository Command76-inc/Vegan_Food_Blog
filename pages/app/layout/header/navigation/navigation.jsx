import Link from "next/link";
import styles from "./navigation.module.scss";
import { useRouter } from "next/router";

const activeLinkStyle = {
  color: "gainsboro",
  backgroundColor: "darkgreen",
  // cursor: "not-allowed",
};

export function NavLinks(props) {
  const router = useRouter();

  return (
    <nav className={styles.navigation} role="navigation">
      <ul>
        <li style={router.route.length === 1 ? activeLinkStyle : null}>
          <Link href="/">
            Home
          </Link>
        </li>
        <li style={router.route.includes("posts") ? activeLinkStyle : null}>
          <Link href="/app/posts/all_posts">
            Blog
          </Link>
        </li>
        <li
          style={
            router.route.includes("local_dining_areas") ? activeLinkStyle : null
          }
        >
          <Link href="/app/local_dining_areas">
            Local Dining
          </Link>
        </li>
        <li style={router.route.includes("recipes") ? activeLinkStyle : null}>
          <Link href="/app/recipes/all_recipes">
            Recipes
          </Link>
        </li>
        <li style={router.route.includes("reviews") ? activeLinkStyle : null}>
          <Link href="/app/reviews/all_reviews">
            Reviews
          </Link>
        </li>
        <li style={router.route.includes("about_us") ? activeLinkStyle : null}>
          <Link href="/app/about_us">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
