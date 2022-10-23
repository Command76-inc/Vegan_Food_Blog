// index.html
import { useState } from 'react';
import { ReplaceHead } from ".//layout/head/head.js";
import { Header } from ".//layout/header/header.js";
const title = "Home | The Vegan Blog";
const pageTitle = "The Vegan Blog";
const description = "The Vegan Blog is a one stop destination for all your vegan essentials";
export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
      <div>
        <ReplaceHead canonical={true} description={description} title={title}></ReplaceHead>
        <Header pagetitle={pageTitle} />         
        <ul>
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>

        <button onClick={handleClick}>Like ({likes})</button>
      </div>
  )
}