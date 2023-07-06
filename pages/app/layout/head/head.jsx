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
