import CharacterSearch from '../character-search/characterSearch'
import {Link } from "react-router-dom";


export default function Dashboard() {
    return (
      <>
        <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/mounts">Mounts</Link>
        <Link to="/minions">Minions</Link>

        </nav>
        <CharacterSearch />
  
      </>
    );
  }