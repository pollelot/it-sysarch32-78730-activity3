import React, { useState } from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css';

const languageOptions = [
  { value: 'english', label: 'English' },
  { value: 'japanese', label: 'Japanese' },
  { value: 'chinese', label: 'Chinese' },
  { value: 'french', label: 'French' },
  
];


const Pokedex = ({ pokemonList }) => {
  const [language, setLanguage] = useState('english');

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div>
      <div className="language-buttons">
        {languageOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => handleLanguageChange(option.value)}
            className={language === option.value ? 'active' : ''}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="pokedex-grid">
        {pokemonList.map((pokemon) => (
          <Pokemon key={pokemon.id} language={language} {...pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;