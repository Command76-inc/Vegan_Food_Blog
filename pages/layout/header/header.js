import { Navbar } from "./navigation/navigation.js";
import { Banner } from "./banner/banner.js"

function PageTitle({ pagetitle }) {
    return <h1>{pagetitle ? pagetitle : 'Default title'}</h1>
}

export function Header(props) {
  return (
  <header>
    <PageTitle pagetitle={props.pagetitle} />
    <Navbar />
    <Banner></Banner>
  </header>
  )
}
