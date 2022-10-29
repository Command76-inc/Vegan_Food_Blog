import { ReplaceHead } from "../layout/head/head.js";
import { Header } from "../layout/header/header.js";
import { Wrapper } from "../layout/wrapper";
const title = "About Us | The Vegan Blog";
const pageTitle = "About Us";
const description = "The Vegan Blog is a one stop destination for all your vegan essentials";

export default function AboutUs(props) {
    return (
    <Wrapper className={props.className}>
        <ReplaceHead canonical={true} description={description} title={title}></ReplaceHead>
        <Header showBanner={true}/>  
        <h2>About Us</h2>
    </Wrapper>
    )
}