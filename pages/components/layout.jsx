import { ReplaceHead } from "../app/layout/head/head";
import { Header } from "../app/layout/header/header";
import { Wrapper } from "../app/layout/wrapper";
import { Footer } from "../app/layout/footer/footer";
import { useRouter } from "next/router";

export default function CreatePostLayout({
  children, // will be a page or nested layout
}) {
  const router = useRouter();

  return (
    <section>
      <ReplaceHead
        canonical={true}
        description={"blsdsd"}
        title={"sdsdsd"}
      ></ReplaceHead>
      <Header showBanner={router.route === "/" ? true : false} />
      {/* Include shared UI here e.g. a header or sidebar */}

      {children}
      <Footer />
    </section>
  );
}
