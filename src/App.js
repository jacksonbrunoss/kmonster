import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from "./routes.js";
import Global from './styles/global.js';

function App() {
  return (
    <div className="App">
      <Global />
      <BrowserRouter>
        <Routes />
      </BrowserRouter> 
    </div>
  );
}

export default App;
