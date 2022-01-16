import React from "react";
import ComponenteComFilhos from "./componentes/ComponenteComFilhos";
import ComParametro from "./componentes/basico/ComParametro";
import Card from "./componentes/layouts/Card";
import "./App.css";

export default (props) => (
  <div className="App">
    <Card titulo="#02 - Componente Com Parametro" color="#FF85CB">
      <ComParametro titulo="Titulo" subtitulo="Subtitulo"></ComParametro>
    </Card>
    <Card titulo="#03 - Componente Com Filhos" color="#D96459" />
    <ComponenteComFilhos>
      <ul>
        <li>Meredith</li>
        <li>Alex</li>
        <li>Geoge</li>
        <li>Izzie</li>
        <li>Cristina</li>
      </ul>
    </ComponenteComFilhos>
  </div>
);
