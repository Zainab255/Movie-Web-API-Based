import React from "react";
import Home from "./components/Home";
import { Route , Routes } from 'react-router-dom';
import Error from './components/Error';
import Single from "./components/Single";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='movie/:id' element={<Single/>}/>
    <Route path='*' element={<Error/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
