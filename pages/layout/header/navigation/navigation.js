const navLinks = {
    home: "./",
    blog: "./blog",
    dining: "./dining",
    recipes: "./recipes",
    reviews: "./reviews" 
}

function buildLinks(linksObject) {
  let linksArray = []
  for (let context in linksObject) {
    linksArray.push(<a href={linksObject[context]}>{context}</a>)
  };
  return linksArray
}

export function Navbar(props) {
    return (
        <nav role="navigation">{buildLinks(navLinks)}</nav>
    )
}