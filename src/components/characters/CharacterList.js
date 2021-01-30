import React from 'react';
import characters from './data';

const List = () => {
  console.log(characters);

  return (
    <>
    <h1>Character List</h1>
      {/* {characters.map((character) => {
        const { id, name, image } = character;
        return <article key={id} className="character">
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
          </div>
        </article>
      })} */}
    </>
  );
};

export default List;
