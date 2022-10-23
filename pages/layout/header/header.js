import { Navbar } from "./navigation/navigation.js";

function PageTitle({ pagetitle }) {
    return <h1>{pagetitle ? pagetitle : 'Default title'}</h1>
}

export function Header(props) {
    console.log(props)
  return (
  <header>
    <PageTitle pagetitle={props.pagetitle} />
    <Navbar />
  </header>
  )
}
