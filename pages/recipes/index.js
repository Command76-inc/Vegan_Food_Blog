import { ReplaceHead } from "../layout/head/head.js";
import { Header } from "../layout/header/header.js";
import { Wrapper } from "../layout/wrapper";
const title = "Recipes | The Vegan Blog";
const pageTitle = "Recipes";
const description = "The Vegan Blog is a one stop destination for all your vegan essentials";

export default function Recipes(props) {
    return (
          </Applications/AMPPS/www/Vegan Food Blog>

    <Wrapper className={props.className}>
        <ReplaceHead canonical={true} description={description} title={title}></ReplaceHead>
        <Header showBanner={false}/>  
        <h2>Recipes</h2>
    </Wrapper>
    )
}