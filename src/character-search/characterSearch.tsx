import React, { useState } from 'react';
import axios from "axios";
import { useContext } from 'react';
import { CharacterContext } from '../CharacterContext';
import  {CharacterPanel}  from '../Components/CharacterPanel'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './char-search.scss';

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
const uerl = 'https://ffxivcollect.com/api/characters/37684988';

export default function CharacterSearch() {

const [searchF, setText] = useState('');
// const [post, setPost] = useState(null);
const {post, setPost}:any = useContext(CharacterContext)

function handleSearch(e:any){
    console.log(e.target.value);
    setText(e.target.value);
}

console.log(post);

function handleChange(){
    if(searchF){
        axios.get(uerl).then((response) => {
           // setPost(response.data);
           setPost(response.data)
        });
    }
}

return(
<>
    <section className='dashboard-search-area'>
        <h1>FFXIV Character Profiler</h1>
        <div className="search-inp">
            <p>A helpful tool to track collectibles in Final Fantasy XIV. Track Achievements, Mounts and Minion
                Collections. Be it from seasoned players to sprouts, this tool is made for all collectors. </p>

            <TextField id="filled-basic" label="Character Url or ID" variant="filled" value={searchF}
                onChange={handleSearch} />

            <Button variant="contained" onClick={handleChange}>Profile Character</Button>
            <div></div>
        </div>
    </section>
    <CharacterPanel userData={post} />
</>
)
}
