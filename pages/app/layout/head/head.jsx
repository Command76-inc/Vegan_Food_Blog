import Head from "next/head";

export function ReplaceHead(props) {
  return (
    <Head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/pure-min.css"
        integrity="sha384-X38yfunGUhNzHpBaEBsWLO+A0HDYOQi8ufWDkZ0k9e0eXz/tH3II7uKZ9msv++Ls"
        crossorigin="anonymous"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/grids-responsive-min.css"
      ></link>
      { /* Adobe Fonts */ }
      <link rel="stylesheet" href="https://use.typekit.net/iyb8yxw.css" />
      { /* Google Fonts */ }
      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta http-equiv="content-type" content="text-html; charset=utf-8"></meta>
      <title>{props.title}</title>
      <meta property="og:title" content={props.title} key="title" />
      <meta name="description" content={props.description} key="description" />
      <meta
        name="og:description"
        content={props.description}
        key="description"
      />
      {props.canonical === true ? (
        <link rel="canonical" href={props.url} />
      ) : (
        <meta name="robots" content="noindex/nofollow" />
      )}
    </Head>
  );
}
