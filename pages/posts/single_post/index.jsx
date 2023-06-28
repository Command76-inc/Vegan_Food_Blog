import { ReplaceHead } from "../../layout/head/head";
import { Header } from "../../layout/header/header";
import { Wrapper } from "../layout/wrapper";
import { Footer } from "../../layout/footer/footer";

const title = "Blog | The Vegan Blog";
const pageTitle = "Blog";
const description = "The Vegan Blog is a one stop destination for all your vegan essentials";

export default function SinglePost(props) {
    return (
    <Wrapper className={props.className}>
        <ReplaceHead canonical={true} description={description} title={title}></ReplaceHead>
        <Header showBanner={false}/>  
        <h2>Single Post</h2>
        <Footer />
    </Wrapper>
    )
}