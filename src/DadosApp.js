import React, { useState } from 'react';
import './DadosApp.css';
import dado1_1 from './imagenes/dado1_1.png';
import dado1_2 from './imagenes/dado1_2.png';
import dado1_3 from './imagenes/dado1_3.png';
import dado1_4 from './imagenes/dado1_4.png';
import dado1_5 from './imagenes/dado1_5.png';
import dado1_6 from './imagenes/dado1_6.png';

import dado2_1 from './imagenes/dado2_1.png';
import dado2_2 from './imagenes/dado2_2.png';
import dado2_3 from './imagenes/dado2_3.png';
import dado2_4 from './imagenes/dado2_4.png';
import dado2_5 from './imagenes/dado2_5.png';
import dado2_6 from './imagenes/dado2_6.png';

import dado3_1 from './imagenes/dado3_1.png';
import dado3_2 from './imagenes/dado3_2.png';
import dado3_3 from './imagenes/dado3_3.png';
import dado3_4 from './imagenes/dado3_4.png';
import dado3_5 from './imagenes/dado3_5.png';
import dado3_6 from './imagenes/dado3_6.png';

const imagenesDados = [
  [dado1_1, dado1_2, dado1_3, dado1_4, dado1_5, dado1_6],
  [dado2_1, dado2_2, dado2_3, dado2_4, dado2_5, dado2_6],
  [dado3_1, dado3_2, dado3_3, dado3_4, dado3_5, dado3_6],
];

function DadosApp() {
  const [dado1, setDado1] = useState(0);
  const [dado2, setDado2] = useState(0);
  const [dado3, setDado3] = useState(0);

  const lanzarDados = () => {
    setDado1(Math.floor(Math.random() * 6));
    setDado2(Math.floor(Math.random() * 6));
    setDado3(Math.floor(Math.random() * 6));
  };

  return (
    <div className="contenedor">
      <h1>Juego de Dados</h1>
      <div className="dados">
        <div className="dado">
          <img src={imagenesDados[0][dado1]} alt="Dado 1" />
        </div>
        <div className="dado">
          <img src={imagenesDados[1][dado2]} alt="Dado 2" />
        </div>
        <div className="dado">
          <img src={imagenesDados[2][dado3]} alt="Dado 3" />
        </div>
      </div>
      <button onClick={lanzarDados}>Lanzar dados</button>
      <p>Resultado: {dado1 + 1 + dado2 + 1 + dado3 + 1}</p>
    </div>
  );
}

export default DadosApp;