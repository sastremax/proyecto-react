import React from "react";
import './App.css'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Vite + Reaccionar</h1>
      <div className="card">
        <p>Editar <code>src/App.jsx</code> y guardar para probar HMR</p>
      </div>
    </div>
  );
}

export default App;
