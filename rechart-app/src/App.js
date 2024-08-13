import React from "react";
import LineChartComponent from "./components/LineChartComponent";
import BarChartComponent from './components/BarChartComponent'

function App() {
  return (
    <div className="App">
      <h1>Visualización de Datos Graficos</h1>
      <div className="recharts-wrapper">
        <h2>Grafico de Líneas</h2>
          <LineChartComponent />  
      </div>
      <div className="recharts-wrapper">
        <h2>Grafico de barras</h2>
          <BarChartComponent />  
      </div>        
    </div>
  );
}

export default App;
