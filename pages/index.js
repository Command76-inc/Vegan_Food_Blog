// index.html
import { ReplaceHead } from ".//layout/head/head.js";
import { Header } from ".//layout/header/header.js";
const title = "Home | The Vegan Blog";
const pageTitle = "The Vegan Blog";
const description = "The Vegan Blog is a one stop destination for all your vegan essentials";
export default function HomePage() {
  return (
      <div>
        <ReplaceHead canonical={true} description={description} title={title}></ReplaceHead>
        <Header pagetitle={pageTitle} showBanner={true}/>
        <h2>Home</h2>
      </div>
  )
}