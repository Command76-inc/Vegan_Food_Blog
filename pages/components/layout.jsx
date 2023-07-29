import { ReplaceHead } from "../app/layout/head/head";
import { Header } from "../app/layout/header/header";
import { Wrapper } from "../app/layout/wrapper";
import { Footer } from "../app/layout/footer/footer";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function CreatePostLayout({
  children, // will be a page or nested layout
}) {
  const router = useRouter();
  const [baseUrl, setBaseUrl] = useState(null);

  useEffect(() => {
    if (typeof window !== undefined) {
      setBaseUrl(window.location.host);
    }
  });
  const description = (route) => {
    if (route.includes("posts")) {
      return "The Vegan Blog | Posts";
    } else if (route.includes("reviews")) {
      return "The Vegan Blog | Reviews";
    } else if (route.includes("recipes")) {
      return "The Vegan Blog | Recipes";
    } else if (route.includes("local_dining_areas")) {
      return "The Vegan Blog | Local Dining Areas";
    } else if (route.includes("about_us")) {
      return "The Vegan Blog | About Us";
    } else {
      return "The Vegan Blog | Home";
    }
  };
  const title = (route) => {
    if (route.includes("posts")) {
      return "The Vegan Blog | Posts";
    } else if (route.includes("reviews")) {
      return "The Vegan Blog | Reviews";
    } else if (route.includes("recipes")) {
      return "The Vegan Blog | Recipes";
    } else if (route.includes("local_dining_areas")) {
      return "The Vegan Blog | Local Dining Areas";
    } else if (route.includes("about_us")) {
      return "The Vegan Blog | About Us";
    } else {
      return "The Vegan Blog | Home";
    }
  };

  return (
    <section>
      <ReplaceHead
        canonical={true}
        description={description(router.route)}
        title={title(router.route)}
        url={baseUrl + router.route}
      ></ReplaceHead>
      <Header showBanner={router.route === "/" ? true : false} />
      {/* Include shared UI here e.g. a header or sidebar */}
        {children}
      <Footer />
    </section>
  );
}
