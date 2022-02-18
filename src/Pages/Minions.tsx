import CharacterSearch from '../character-search/characterSearch'
import {Link } from "react-router-dom";


export default function Minions() {
    return (
      <>
        <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/mounts">Mounts</Link>
        <Link to="/minions">Minions</Link>
        </nav>
        <p>This is Minions asdfasdfasdf</p>
  
      </>
    );
  }