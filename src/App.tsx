
import './App.scss';
import { Routes, Route, Link } from "react-router-dom";
import { useContext } from 'react';
import { Button } from '@mui/material';
import { CharacterContext } from './CharacterContext';
import { useStoreState } from './hooks';
import  Dashboard from './Pages/Dashboard';
import  Minions  from "./Pages/Minions";
import  Mounts  from "./Pages/Mounts";

function App() {


  const character = useContext(CharacterContext);
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
