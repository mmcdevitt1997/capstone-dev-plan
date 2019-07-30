import React from 'react';
import { BrowserRouter } from "react-router-dom"
import './App.css';
import NavBar from "./components/nav/NavBar"
import Login from "./components/login/Login"

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <NavBar />
      <Login />
    </div>
    </BrowserRouter>
  );
}

export default App;
