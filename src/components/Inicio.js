import React, { useState } from 'react';
import Honda from './Honda/Honda.js';
import Yamaha from './Yamaha/Yamaha.js';
import './Inicio.css';

function Inicio() {
  const [showHondaContent, setShowHondaContent] = useState(false);
  const [showYamahaContent, setShowYamahaContent] = useState(false);
  const [showBMWContent, setShowBMWContent] = useState(false); 
  const [hondaButtonPressed, setHondaButtonPressed] = useState(false);

  const handleHondaButtonClick = () => {
    setShowHondaContent(true);
    setShowYamahaContent(false); // Garante que os outros conteúdos estejam ocultos quando o botão da Honda for clicado
    setShowBMWContent(false);
    setHondaButtonPressed(true);
  };

  const handleYamahaButtonClick = () => {
    setShowHondaContent(false); // Garante que os outros conteúdos estejam ocultos quando o botão da Yamaha for clicado
    setShowYamahaContent(true);
    setShowBMWContent(false);
  };

  const handleBMWButtonClick = () => {
    setShowHondaContent(false);
    setShowYamahaContent(false);
    setShowBMWContent(true); // Garante que os outros conteúdos estejam ocultos quando o botão da BMW for clicado
  };

  return (
    <div>
      <h1>Motos mais famosas</h1>
      <div className="BotaoCentralizado">
        <button onClick={handleHondaButtonClick}>Ver Motos Honda</button>
        <button onClick={handleYamahaButtonClick}>Ver Motos Yamaha</button>
        <button onClick={handleBMWButtonClick}>Ver Motos BMW</button>
      </div>
      <div className={`HondaContent ${showHondaContent ? 'HondaBackground' : ''}`}>
      {showHondaContent && <Honda />}
      </div>

      {showYamahaContent && <Yamaha />}
    </div>
  );
}

export default Inicio;
