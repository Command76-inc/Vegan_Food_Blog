import { ReplaceHead } from "../../layout/head/head.js";
import { Header } from "../../layout/header/header.js";
import { Wrapper } from "../../layout/wrapper";
const title = "Blog | The Vegan Blog";
const pageTitle = "Blog - All posts";
const description = "The Vegan Blog is a one stop destination for all your vegan essentials";

export default function AllPosts(props) {
    return (
    <Wrapper className={props.className}>
        <ReplaceHead canonical={true} description={description} title={title}></ReplaceHead>
        <Header showBanner={true}/>  
        <h2>All Posts</h2>
    </Wrapper>
    )
}