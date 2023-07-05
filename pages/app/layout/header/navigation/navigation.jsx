import Link from "next/link";
import styles from "./navigation.module.scss";
import { useRouter } from "next/router";

const activeLinkStyle = {
  color: "gainsboro",
  backgroundColor: "darkgreen",
  cursor: "not-allowed",
};

export function NavLinks(props) {
  const router = useRouter();

  return (
    <nav className={styles.navigation} role="navigation">
      <ul>
        <li style={router.route.length === 1 ? activeLinkStyle : null}>
          <Link href="/">
            <div onClick={router.route.length === 1 ? null : props.reveal}>
              Home
            </div>
          </Link>
        </li>
        <li style={router.route.includes("posts") ? activeLinkStyle : null}>
          <Link href="/app/posts/all_posts">
            <div onClick={router.route.includes("posts") ? null : props.reveal}>
              Blog
            </div>
          </Link>
        </li>
        <li
          style={
            router.route.includes("local_dining_areas") ? activeLinkStyle : null
          }
        >
          <Link href="/app/local_dining_areas">
            <div
              onClick={
                router.route.includes("local_dining_areas")
                  ? null
                  : props.reveal
              }
            >
              Local Dining
            </div>
          </Link>
        </li>
        <li style={router.route.includes("recipes") ? activeLinkStyle : null}>
          <Link href="/app/recipes">
            <div
              onClick={router.route.includes("recipes") ? null : props.reveal}
            >
              Recipes
            </div>
          </Link>
        </li>
        <li style={router.route.includes("reviews") ? activeLinkStyle : null}>
          <Link href="/app/reviews">
            <div
              onClick={router.route.includes("reviews") ? null : props.reveal}
            >
              Reviews
            </div>
          </Link>
        </li>
        <li style={router.route.includes("about_us") ? activeLinkStyle : null}>
          <Link href="/app/about_us">
            <div
              onClick={router.route.includes("about_us") ? null : props.reveal}
            >
              About Us
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
