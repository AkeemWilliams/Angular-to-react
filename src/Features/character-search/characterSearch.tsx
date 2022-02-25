import React, { useState, memo } from 'react';
import axios from "axios";
import { useContext } from 'react';
import { CharacterContext } from '../../CharacterContext';
import  {CharacterPanel}  from '../../Components/CharacterPanel';
import { Character } from '../../Types/CharacterTypes';
import { Mounts} from '../../Types/MountTypes';
import { Minions} from '../../Types/MinionTypes'


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './char-search.scss';

// const uerl = 'https://ffxivcollect.com/api/characters/37684988';
const mountsApi = 'https://ffxivcollect.com/api/mounts';
const minionsApi = 'https://ffxivcollect.com/api/minions';
const MemoizedCPanel = memo(CharacterPanel);



export default function CharacterSearch() {

const [searchF, setText] = useState('');
const {post, setPost}:any = useContext(CharacterContext);


const getCharacter = () =>{
    let charcode = (searchF).match(/\d+/);
    let char = parseInt(charcode ? charcode[0] : 'undefed')
    console.log(searchF, char);

    const characterApi = `http://localhost:3001/samplere`;
    if(char){
        return(
        Promise.all([axios.get(characterApi), getMounts(), getMinions()])
        .then((values)=> {

         const character:Character = values[0].data;
         const minions:Minions = values[2].data;
         const mounts:Mounts = values[1].data;

         if(character.mounts != null)
        mounts.results = mounts.results?.map((o1) =>{
             if(character.mounts.findIndex((i) => i.id === o1.id) != -1){
               return ({...o1, isOwned: true});
             }else{
                 return o1
             }
         })

         if(character.minions != null)
         minions.results = minions.results?.map((o1) =>{
              if(character.minions.findIndex((i) => i.id === o1.id) != -1){
                return ({...o1, isOwned: true});
              }else{
                  return o1
              }
          })

         mounts.results?.sort((a , b ) => a.name.localeCompare(b.name))
         minions.results?.sort((a , b ) => a.name.localeCompare(b.name))

          setPost({character : character, mounts : mounts, minions : minions})

          }).catch()
          .finally()
        )
    }else{
        alert('not an actual call')
    }
};
const getMounts = () => axios.get(mountsApi);
const getMinions = () => axios.get(minionsApi);

function handleSearch(e:string){
    setText(e);
}

function handleChange(){
    if(searchF){
        getCharacter();
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
                onChange={(e) => handleSearch(e.target.value)} />

            <Button variant="contained" onClick={handleChange}>Profile Character</Button>
            <div></div>
        </div>
    </section>
    {post && (
        <MemoizedCPanel userData={post} />)
    }
</>
)
}
