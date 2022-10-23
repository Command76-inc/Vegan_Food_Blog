import Head from 'next/head'

function Title({ title }) {
  return <title>{title ? title: "Vegan App Home Page"}</title>
}

function OGTitle({ title }) {
  return <meta property="og:title" content={title ? title: "Vegan App Home Page"} key="title" />
}

function Description({ description }) {
  return <meta name="description" content={description ? description: "A place for all your vegan essentials"} key="description"></meta>
}

function OGDescription({ description}) {
  return <meta name="og:description" content={description ? description: "A place for all your vegan essentials"} key="description"></meta>
}

function CanonicalLink({ page }) {
  return <link rel="canonical" href={page ? page: "/"} ></link>
}

function Robots() {
  return <meta name="robots" content="noindex/nofollow"></meta>
}

export function ReplaceHead(props) {
    return (
    <Head>
        <Title title={props.title}></Title>
        <OGTitle title={props.title}></OGTitle>
        <Description description={props.description}></Description>
        <OGDescription description={props.description}></OGDescription>
        {props.canonical  === true ? <CanonicalLink>props.page</CanonicalLink>:<Robots></Robots>} 
    </Head>
    )
}