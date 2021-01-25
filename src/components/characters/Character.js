import React, { useState } from 'react';
import List from './CharacterList';

function Character() {

  return (
    <main>
      {/* <section className="container">
        <h3>{characters.length} characters to choose from</h3>
        <List characters={characters} />
        <button onClick={() => setCharacters([characters.id])}>Select this character</button>
      </section> */}
      <h1>Characters</h1>
    </main>

  );
}

export default Character;