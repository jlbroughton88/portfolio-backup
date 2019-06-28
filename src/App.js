import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./components/HomePage"
import SecondWindow from "./components/SecondWindow"
import ThirdWindow from './components/ThirdWindow';
import FourthWindow from "./components/FourthWindow"
import NavBar from "./components/NavBar"

function App() {

  let HomePageDiv = document.getElementById("HomePage");
  let SecondWindowDiv = document.getElementById("SecondWindow");
  let ThirdWindowDiv = document.getElementById("ThirdWindow");
  let FourthWindowDiv = document.getElementById("FourthWindow");



  return (
    <div className="App">
      <HomePage id="HomePage"/>
      <SecondWindow id="SecondWindow"/>
      <ThirdWindow id="ThirdWindow"/>
      <FourthWindow id="FourthWindow"/>
    </div>
  );
}

export default App;
