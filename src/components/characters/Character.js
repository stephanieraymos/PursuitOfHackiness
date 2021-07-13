import React, { useState } from "react";
import List from "./CharacterList";

function Character() {
  const charList = [
    "/img/boy.png",
    "/img/dragon.png",
    "/img/ghost.png",
    "/img/mythical-creature.png",
    "/img/native-american.png",
    "/img/ninja.png",
    "/img/pencil.png",
    "/img/superhero.png",
  ];
  // charList.forEach(function (img) {
  //   return img;
  // });

  return (
    <>
      <main>
        {/* <section className="container">
        <h3>{characters.length} characters to choose from</h3>
        <List characters={characters} />
        <button onClick={() => setCharacters([characters.id])}>Select this character</button>
      </section> */}
        <h1 className="center-text p-top">Characters</h1>
        <div className="container">
          <img src="/img/superhero.png"
          alt="character"
          className="character-small"
        />
        <img
          src="/img/pencil.png"
          alt="character"
          className="character-small"
        />
        <img src="/img/ninja.png" alt="character" className="character-small" />
        <img
          src="/img/native-american.png"
          alt="character"
          className="character-small"
        />
        <img
          src="/img/mythical-creature.png"
          alt="character"
          className="character-small"
        />
        <img src="/img/ghost.png" alt="character" className="character-small" />
        <img
          src="/img/dragon.png"
          alt="character"
          className="character-small"
        />
        <img src="/img/boy.png" alt="character" className="character-small" />
        <img
          src="/img/wizard.png"
          alt="character"
          className="character-small"
        />
        <img src="/img/woman.png" alt="character" className="character-small" />
        </div>
      </main>
    </>
  );
}

export default Character;
