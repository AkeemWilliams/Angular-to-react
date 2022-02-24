import {Link } from "react-router-dom";
import { Button } from '@mui/material';
import { Key, useContext, useState } from 'react';
import { CharacterContext } from '../CharacterContext';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CustomizedDialogs from '../Components/Dialog'

export default function Mounts() {
    const {post, setpost}:any = useContext(CharacterContext);

    const [open, setOpen] = useState(false);
    const [selectedMount, setMount] = useState({});

    const [selection, setSelection] = useState('All');
    const menuItems = ['All', 'Collected', 'Uncollected'];

    const handleChange = (event: SelectChangeEvent) => {
        setSelection(event.target.value);
        console.log(selection);

        const minions = document.querySelectorAll(".minion-box");
        const collectedminions = document.querySelectorAll(".minion-box.owned");

      };


    const handlemountClick = (mount:any) =>{
        console.log('yo', mount, open);
        setMount(mount)
        setOpen(true);
    }

    function MinionList(props:any){
        const {shown} = props;

        {post.mounts.results.map((mount:any, index: Key | null | undefined)=>{
            return( 
            <div className={`minion-box ${shown} ${mount.isOwned ? "owned" : ""}`} key={mount.id} onClick={() => handlemountClick(mount)}>
            <img src={mount.image} alt={mount.name}/>
            <span>{mount.name}</span>
        </div>)

        })}

    }

    if(post == undefined){
        window.location.href = "/";
    }




    
console.log(post);
    return (
      <>
        <div>
    <section className="filter-area">
        <div>
        <div className="page-name">
            <h2>Character</h2>
            <span>Mounts</span>
        </div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Select an option</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={selection}
          onChange={handleChange}
          label="Age"
        >{menuItems.map((mItem, index) =>  <MenuItem key={index} value={mItem}>{mItem}</MenuItem>)}
 
        </Select>
      </FormControl>
        </div>
    </section>
    {/* <div *ngIf="showSpinner" className="spin-overlay">
        <mat-spinner></mat-spinner>
      
      </div> */}
    <section>
        {/* <div className="err-cont" *ngIf="errorShow">{{errMsg}}</div> */}
        <div  className="items-collected">
            <p>
                {post.character.mounts.length} of {post.mounts.count} obtained.
            </p>
        </div>

        <div className="minion-container">
            {selection == 'all' ? "" : ""}
            {selection == 'Collected' ? "" : ""}
            {selection == 'Uncollected' ? "" : ""}

            {post.mounts.results.map((mount:any, index: Key | null | undefined)=>{
                return( 
                <div className={`minion-box ${selection} ${mount.isOwned ? "owned" : ""}`} key={mount.id} onClick={() => handlemountClick(mount)}>
                <img src={mount.image} alt={mount.name}/>
                <span>{mount.name}</span>
            </div>)

            })}
        </div>

    </section>
</div>
<CustomizedDialogs open={open} setOpen={setOpen} data = {selectedMount}/>
      </>
    );
  }


  