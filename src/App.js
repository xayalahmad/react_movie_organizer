import React, { useState } from 'react';
import { Navbar } from './layouts/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from './layouts/MainPage';
import FavoritesPage from './pages/FavoritesPage';
import NoMatch from './pages/NoMatch';


function App() {

  return (
    <div className="">
      <BrowserRouter>
      <Navbar/> 
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/favorite/:id' element={<FavoritesPage/>}/>
          <Route path='*' element={<NoMatch/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
