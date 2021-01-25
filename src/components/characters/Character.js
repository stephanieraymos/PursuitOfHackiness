import React, { useState } from 'react';
import characters from './characters';
import List from './CharacterList';

function Character() {

  const [character, setCharacter] = useState(characters)

  return (
    <main>
      <section className="container">
        <h3>{character.length} characters to choose from</h3>
        <List character={characters} />
        <button onClick={() => setCharacter([characters.id])}>Select this character</button>
      </section>
    </main>

  );
}

export default Character;