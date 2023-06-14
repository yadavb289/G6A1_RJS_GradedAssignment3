import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationMenu from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/Main.css'
import 'react-toastify/dist/ReactToastify.css';
import ViewMovie from './model/ViewMovie';
import Home from './model/Home';
function App() {
    

  return (
    <div className="App">
      <NavigationMenu />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view_movie/:id" element={<ViewMovie  />} />
      </Routes>
          
    </div>
  );
}


export default App;
