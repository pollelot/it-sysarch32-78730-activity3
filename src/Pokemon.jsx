import React from 'react';
import './Pokemon.css';

const Pokemon = (props) => {
  const { id, name, type, base, image } = props;

  return (
    <div className="pokemon-card">
      <img className="pokemon-image" src={image} alt={name.english} />
      <div className="pokemon-info">
        <p className="pokemon-id">ID: {id}</p>
        <p className="pokemon-name">Name: {name.english}</p>
        <p className="pokemon-type">Type: {type.join(', ')}</p>
        <p className="pokemon-hp">HP: {base.HP}</p>
        <p className="pokemon-attack">Attack: {base.Attack}</p>
        <p className="pokemon-defense">Defense: {base.Defense}</p>
        <p className="pokemon-special-attack">Special Attack: {base['Sp. Attack']}</p>
        <p className="pokemon-special-defense">Special Defense: {base['Sp. Defense']}</p>
        <p className="pokemon-speed">Speed: {base.Speed}</p>
      </div>
    </div>
  );
};

export default Pokemon;