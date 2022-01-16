import React from "react";
import ComponenteComFilhos from "./componentes/ComponenteComFilhos";
import ComParametro from "./componentes/ComponenteComProps";
import Card from "./componentes/layouts/Card";
import "./App.css";
import ComponenteComProps from "./componentes/ComponenteComProps";

export default (props) => (
  <div className="App">
      <Card titulo="#02 - Componente Com Parametro" color="#836FFF">
        <ComponenteComProps titulo="Grey's Anatomy" subtitulo="Série Televisiva"></ComponenteComProps>
      </Card>
    <Card titulo="#03 - Componente Com Filhos" color="#7FFFD4">
      <ComponenteComFilhos>
        <ul>
          <li>Meredith</li>
          <li>Alex</li>
          <li>Geoge</li>
          <li>Izzie</li>
          <li>Cristina</li>
        </ul>
      </ComponenteComFilhos>
    </Card>
  </div>
);
