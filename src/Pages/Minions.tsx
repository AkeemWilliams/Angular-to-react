
import { Key, useContext, useState } from 'react';
import { CharacterContext } from '../CharacterContext';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CustomizedDialogs from '../Components/Dialog'

export default function Minions() {
    const {post, setpost}:any = useContext(CharacterContext);

    const [open, setOpen] = useState(false);
    const [selectedMinion, setMinion] = useState({});

    const [selection, setSelection] = useState('All');
    const menuItems = ['All', 'Collected', 'Uncollected'];

    const handleChange = (event: SelectChangeEvent) => {
        setSelection(event.target.value);
      };


    const handleMinionClick = (minion:any) =>{
        console.log('yo', minion, open);
        setMinion(minion)
        setOpen(true);
    }

    if(post == undefined){
        window.location.href = "/";
    }

    return (
      <>

        <div>
         <section className="filter-area">
        <div>
        <div className="page-name">
            <h2>Character</h2>
            <span>Minions</span>
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
                {post.character.minions.length} of {post.minions.count} obtained.
            </p>
        </div>

        <div className="minion-container">
            {post.minions.results.map((minion:any, index: Key | null | undefined)=>{
                return(
                <div className={`minion-box ${minion.isOwned ? "owned" : ""}`} key={minion.id} onClick={() => handleMinionClick(minion)}>
                <img src={minion.image} alt={minion.name}/>
                <span>{minion.name}</span>
            </div>)

            })}
        </div>

    </section>
        </div>
<CustomizedDialogs open={open} setOpen={setOpen} data = {selectedMinion}/>
      </>
    );
  }


  