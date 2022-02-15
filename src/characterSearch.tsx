import React, { useState } from 'react'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './char-search.scss';

export default function CharacterSearch() {

    const [searchF, setText] = useState('yo');
    const [index, setIndex] = useState(0);

    function handleSearch(e:any){
        console.log(e.target.value);
        setText(e.target.value);
    }

    function handleChange(){
        if(searchF){
            alert(searchF);
            setText("");
        }
    }


return(
<>
    <section className='dashboard-search-area'>
        <h1>FFXIV Character Profiler</h1>
        <div className="search-inp">
            <p>A helpful tool to track collectibles in Final Fantasy XIV. Track Achievements, Mounts and Minion
                Collections. Be it from seasoned players to sprouts, this tool is made for all collectors. </p>

                <TextField  
                id="filled-basic" 
                label="Character Url or ID" 
                variant="filled" 
                value={searchF}
                onChange={handleSearch}
                />

                 <Button variant="contained" onClick={handleChange}>Profile Character</Button>

            <div>
            </div>


        </div>
    </section>
</>
)
}





