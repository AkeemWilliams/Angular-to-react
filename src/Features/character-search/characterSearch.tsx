import React, { useState, memo, useEffect } from 'react';
import axios from "axios";
import  {CharacterPanel}  from '../../Components/CharacterPanel';
import { Character } from '../../Types/CharacterTypes';
import { Mounts} from '../../Types/MountTypes';
import { Minions} from '../../Types/MinionTypes'
import CircularProgress from '@mui/material/CircularProgress';

import { useRecoilState} from "recoil";
import { recoilCharProfile } from '../../App';

//redux
import { 
    updateCharacter, 
    selectChar, 
    fetchChar, 
    fetchMounts, 
    fetchMinions } from '../characterSlice';

import { useAppSelector, useAppDispatch } from '../../hooks';


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './char-search.scss';

const mountsApi = 'https://ffxivcollect.com/api/mounts';
const minionsApi = 'https://ffxivcollect.com/api/minions';
const MemoizedCPanel = memo(CharacterPanel);


export default function CharacterSearch() {
    const appStore = useAppSelector(selectChar);
    const dispatch = useAppDispatch();

    const [searchF, setText] = useState('');
    const [loading, setLoading] = useState(false);
    const [canClick, setCanClick] = useState(false);

    //recoil
    const [character, recoilCharacter] = useRecoilState(recoilCharProfile);

//Disable Search button
    useEffect(() => {
        if(searchF.length){
            setCanClick(true);
        }else{
            setCanClick(false);
        }
    });

const getMounts = () => axios.get(mountsApi);
const getMinions = () => axios.get(minionsApi);

const getCharacter = () =>{
    let charcode = (searchF).match(/\d+/);
    let char = parseInt(charcode ? charcode[0] : 'undefed')

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

        // setPost({character : character, mounts : mounts, minions : minions})
        //dispatch(getCharacterR({character : character, mounts : mounts, minions : minions}))

        setLoading(false);

          }).catch((error)=> {
              console.log('Your Api dun messed up.', error);
              return setLoading(false);

            })
          .finally()
        )
    }else{
        setLoading(false);
    }
};


    function handleSearch(e:string){
        setText(e);
    }

    async function handleChange(){
        if(searchF){
            setLoading(true);
            //getCharacter();
           await dispatch(fetchMounts());
           console.log('2');
           await dispatch(fetchMinions());
           console.log('3');
           await dispatch(fetchChar());
           console.log('1');
           await dispatch(updateCharacter())

            setLoading(false);

            setText('');
            console.log('huh',appStore);

        }
    }

return(
<>
    <section className='dashboard-search-area'>
        <h1>FFXIV Character Profiler</h1>
        {appStore.character.birthdate}
        <div className="search-inp">
            <p>A helpful tool to track collectibles in Final Fantasy XIV. Track Achievements, Mounts and Minion
                Collections. Be it from seasoned players to sprouts, this tool is made for all collectors. </p>
            <TextField id="filled-basic" label="Character Url or ID" variant="filled" value={searchF}
                onChange={(e) => handleSearch(e.target.value)} />

            <Button variant="contained" onClick={handleChange} disabled={!canClick}>Profile Character</Button>
            <div></div>
        </div>
    </section>
  {appStore.loaded && ( 
        <MemoizedCPanel userData={appStore} />
       )
    } 
    {loading && <div className="spin-overlay">
     <CircularProgress />
    </div>}
</>
)
}
