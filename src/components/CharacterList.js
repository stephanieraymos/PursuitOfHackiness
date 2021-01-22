import React from 'react';

const Character = ({ characters }) => {
  return (
    <>
      {people.map((character) => {
        const { id, name, image } = character;
        return <article key={id} className="character">
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
          </div>
        </article>
      })}
    </>
  );
};

export default Character;
