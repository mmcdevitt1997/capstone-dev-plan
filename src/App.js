import React from 'react';
import { BrowserRouter } from "react-router-dom"
import './App.css';
import NavBar from "./components/nav/NavBar"

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <NavBar />
      <h1>hello</h1>
    </div>
    </BrowserRouter>
  );
}

export default App;
