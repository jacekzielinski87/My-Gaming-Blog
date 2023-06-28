import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header";
import {Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Kategorie from './pages/Kategorie';
import Wywiady from './pages/Wywiady';
import Kontakt from "./pages/Kontakt";






function App() {
  
  return (
    <>
      <Header></Header>
        <Routes>
          <Route path='/'element={<About/>}/>
          <Route path='/Kategorie' element={<Kategorie/>}/>
          <Route path='/Wywiady' element={<Wywiady/>}/>
          <Route path='/Kontakt' element={<Kontakt/>}/>
        </Routes>
    </>
    );
}

export default App;
