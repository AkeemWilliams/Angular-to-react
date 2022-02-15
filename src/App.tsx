import React from 'react';
import logo from './logo.svg';
import './App.scss';

import CharacterSearch from './characterSearch'
import { ThemeProvider } from '@mui/material/styles';
import { myTheme } from './theme'



function App() {
  return (
    <ThemeProvider theme={myTheme}>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React sdcf

        </a>
      </header> */}
      <nav>hbk</nav>
      <CharacterSearch />

    </div>
    </ThemeProvider>
  );
}

export default App;
