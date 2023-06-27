import { ReplaceHead } from "../layout/head/head";
import { Header } from "../layout/header/header";
import { Wrapper } from "../layout/wrapper";
import { Footer } from "../layout/footer/footer";
import styles from "./about_us.module.scss";
const title = "About Us | The Vegan Blog";
const pageTitle = "About Us";
const description =
  "The Vegan Blog is a one stop destination for all your vegan essentials";

export default function AboutUs(props) {
  return (
    <Wrapper className={props.className}>
      <ReplaceHead
        canonical={true}
        description={description}
        title={title}
      ></ReplaceHead>
      <Header showBanner={false} />
      <main className={styles["about-us-section"]}>
        <h2>About Us</h2>
        <h3>Welcome to our vegan blog site!</h3>{" "}
        <p>
          At{" "}
          <strong>
            <em>The Vegan Blog</em>
          </strong>
          , we are passionate about promoting a compassionate and sustainable
          lifestyle through the power of veganism. Our mission is to provide you
          with a wealth of valuable information, resources, and inspiration to
          support your journey towards a plant-based lifestyle.
        </p>
        <p>
          {" "}
          Our team of dedicated writers and contributors are committed to
          sharing the latest insights, tips, and trends in the vegan world.
          Whether you're a seasoned vegan, just starting out, or simply
          interested in learning more about plant-based living, we have
          something for everyone.{" "}
        </p>{" "}
        <p>
          Why veganism? We believe that choosing a vegan lifestyle is not only
          beneficial for our own health but also for the well-being of animals
          and the planet. By adopting a plant-based diet, we can reduce our
          ecological footprint, combat climate change, and contribute to the
          preservation of our environment.
        </p>{" "}
        <p>
          {" "}
          On our blog, you'll find a diverse range of content, including
          delicious and easy-to-follow vegan recipes that will tantalize your
          taste buds and prove that vegan food can be both nutritious and
          incredibly flavorful. From hearty main courses to delectable desserts,
          we've got you covered.{" "}
        </p>
        <p>
          In addition to recipes, we explore various aspects of vegan living,
          such as nutrition and health, cruelty-free fashion and beauty, ethical
          considerations, and sustainable living practices. We aim to address
          common questions, debunk myths, and provide evidence-based information
          to empower you to make informed choices.
        </p>
        <p>
          {" "}
          We understand that transitioning to a vegan lifestyle can sometimes
          feel overwhelming, so we strive to create a supportive community where
          you can connect with like-minded individuals. Our blog allows you to
          engage in discussions, share your experiences, and seek advice from
          others who are on a similar path.
        </p>
        <p>
          {" "}
          We are continuously growing and evolving, just like the vegan movement
          itself. Our commitment to providing valuable content remains
          unwavering, as we strive to be your go-to resource for all things
          vegan. Join us on this exciting journey as we explore the incredible
          benefits of plant-based living and create a better world for
          ourselves, the animals, and the planet we call home.{" "}
        </p>
        <p>
          Thank you for visiting our blog site. We hope you find inspiration,
          motivation, and the information you need to embrace a compassionate
          and sustainable vegan lifestyle. Together, let's make a difference,
          one plant-based meal at a time.{" "}
        </p>{" "}
        <p> With love and plant-powered goodness, </p>
        <p>
          {" "}
          <strong>
            <em>The Vegan Blog</em>
          </strong>
        </p>
      </main>
      <Footer />
    </Wrapper>
  );
}
