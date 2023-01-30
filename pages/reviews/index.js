import { ReplaceHead } from "../layout/head/head.js";
import { Header } from "../layout/header/header.js";
import { Wrapper } from "../layout/wrapper";
const title = "Reviews | The Vegan Blog";
const pageTitle = "Reviews";
const description = "The Vegan Blog is a one stop destination for all your vegan essentials";

export default function Reviews(props) {
    return (
    <Wrapper className={props.className}>
        <ReplaceHead canonical={true} description={description} title={title}></ReplaceHead>
        <Header showBanner={false}/>  
        <h2>Reviews</h2>
    </Wrapper>
    )
}