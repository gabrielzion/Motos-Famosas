import React from 'react';
import './ImagensHonda.css';
import hornet from './hornet.jpg';
import cbr1000rr from './cbr1000rr.jpg';

function Honda(props) {
  return (
    <div className={`Centralizado ${props.className}`}>
        <h1>Motos da Honda</h1>
      <div className="moto-container">
        <img src={hornet} alt="Hornet" />
        <h3>Hornet</h3>
        <p>$5000</p>
      </div>
      <div className="moto-container">
        <img src={cbr1000rr} alt="CBR1000RR" />
        <h3>CBR1000RR</h3>
        <p>$12000</p>
      </div>
    </div>
  );
}

export default Honda;
