import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Routes, Route, Link } from "react-router-dom";

import CharacterSearch from './character-search/characterSearch'
import { ThemeProvider } from '@mui/material/styles';
import { myTheme } from './theme'
import { useContext } from 'react';
import { CharacterContext } from './CharacterContext';
import  Dashboard from './Pages/Dashboard';
import  Minions  from "./Pages/Minions";
import  Mounts  from "./Pages/Mounts";


function App() {
  const [post, setPost] = useState(null);
  const value = {post, setPost};
  
  const character = useContext(CharacterContext)

  return (
    <ThemeProvider theme={myTheme}>
      <CharacterContext.Provider value={value}>
    <div className="App">
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="mounts" element={<Mounts />} />
        <Route path="minions" element={<Minions />} />

   </Routes>
    </div>
     </CharacterContext.Provider>

    </ThemeProvider>
  );
}

export default App;
