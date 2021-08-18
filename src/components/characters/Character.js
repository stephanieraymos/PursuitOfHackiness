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

  const chooseCharacter = () => {
  // Create onclick for when character is clicked on to load a confirmation
  // If confirmed, go to next page in flow
  }

  return (
    <>
      <main>
        {/* <section className="container">
        <h3>{characters.length} characters to choose from</h3>
        <List characters={characters} />
        <button onClick={() => setCharacters([characters.id])}>Select this character</button>
      </section> */}

        <h1 className="center-text p-top">Characters</h1>
        <div className="container character-cont">
          <div className="single-character-cont">
            <p className="center-text">Captain America</p>
            <img
              src="/img/superhero.png"
              alt="character"
              className="character-small"
            />
          </div>
          <div className="single-character-cont">
            <p className="center-text">Pencil-man</p>
            <img
              src="/img/pencil.png"
              alt="character"
              className="character-small"
            />
          </div>
          <div className="single-character-cont">
            <p className="center-text">Ninja-man</p>
            <img
              src="/img/ninja.png"
              alt="character"
              className="character-small"
            />
          </div>
          <div className="single-character-cont">
            <p className="center-text">Hippie-man</p>
            <img
              src="/img/native-american.png"
              alt="character"
              className="character-small"
            />
          </div>
          <div className="single-character-cont">
            <p className="center-text">Woke-man</p>
            <img
              src="/img/mythical-creature.png"
              alt="character"
              className="character-small"
            />
          </div>
          <div className="single-character-cont">
            <p className="center-text">Ghost-man</p>
            <img
              src="/img/ghost.png"
              alt="character"
              className="character-small"
            />
          </div>
          <div className="single-character-cont">
            <p className="center-text">Dragon-man</p>
            <img
              src="/img/dragon.png"
              alt="character"
              className="character-small"
            />
          </div>
          <div className="single-character-cont">
            <p className="center-text">Man</p>
            <img
              src="/img/boy.png"
              alt="character"
              className="character-small"
            />
          </div>
          <div className="single-character-cont">
            <p className="center-text">Wizard-man</p>
            <img
              src="/img/wizard.png"
              alt="character"
              className="character-small"
            />
          </div>
          <div className="single-character-cont">
            <p className="center-text">Wo-man</p>
            <img
              src="/img/woman.png"
              alt="character"
              className="character-small"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Character;
