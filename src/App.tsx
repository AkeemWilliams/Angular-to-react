import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { useContext } from 'react';
import { Button } from '@mui/material';
import { CharacterContext, CharacterProvider } from './CharacterContext';
import { useAppSelector, useAppDispatch, useStoreState } from './hooks';
import  Dashboard from './Pages/Dashboard';
import  Minions  from "./Pages/Minions";
import  Mounts  from "./Pages/Mounts";

function App() {
  // const [post, setPost] = useState(null);
  // const value = {post, setPost};

  const character = useContext(CharacterContext);
  const postData = Object.values(character)[0];
  const appStore = useStoreState((state) => state.characterState);

  console.log(Object.values(character), appStore);

  return (
    <div className="App">
    <nav>
        <Button component={Link} to="/">Dashboard</Button>
        {!!appStore.character.id && <>
        <Button component={Link} to="/mounts">Mounts</Button>
        <Button component={Link} to="/minions">Minions</Button>
        </>}

    </nav>    
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="mounts" element={<Mounts />} />
        <Route path="minions" element={<Minions />} />
   </Routes>
    </div>
  );
}

export default App;
