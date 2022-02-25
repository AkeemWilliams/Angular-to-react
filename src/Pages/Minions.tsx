
import { Key, useContext, useState } from 'react';
import { CharacterContext } from '../CharacterContext';
import {InputAdornment } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CustomizedDialogs from '../Components/Dialog'
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
import { ResultsSubInt } from "../Types/MountTypes";


export default function Minions() {
    const {post, setpost}:any = useContext(CharacterContext);
    const [open, setOpen] = useState(false);
    const [selectedMinion, setMinion] = useState({});
    const [selection, setSelection] = useState('All');
    const [searchText, setSearchText] = useState("");
    const [filMinoins, setFilMinoins] = useState((post.minions.results ?? []))

const handleSearchChange = (e:string) => {
    setSearchText(e)
    setFilMinoins(
        post.minions?.results?.filter((minion:ResultsSubInt )=> minion.name.toLowerCase().includes(e.toLowerCase())
    )
)
};
    const menuItems = ['All', 'Collected', 'Uncollected'];

    const handleChange = (event: SelectChangeEvent) => {
        setSelection(event.target.value);
      };


    const handleMinionClick = (minion:ResultsSubInt) =>{
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
        <FormControl variant="filled" sx={{ m: 1, minWidth: 201 }}>
                    <InputLabel id="demo-simple-select-standard-label">Select an option</InputLabel>
                    <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard"
                        value={selection} onChange={handleChange} label="Age">{menuItems.map((mItem, index) =>
                        <MenuItem key={index} value={mItem}>{mItem}</MenuItem>)}
                    </Select>
                </FormControl>
      <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        value={searchText}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        variant="filled"
                        size="medium"
                        InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                    />
        </div>
    </section>
    <section>
        <div  className="items-collected">
            <p>
                {post.character.minions.length} of {post.minions.count} obtained.
            </p>
        </div>

        <div className="minion-container">
            {filMinoins.map((minion:ResultsSubInt)=>{
                return(
                <div className={`minion-box ${selection} ${minion.isOwned ? "owned" : ""}`} key={minion.id} onClick={() => handleMinionClick(minion)}>
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


  