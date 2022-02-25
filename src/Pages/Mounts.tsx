import {Link } from "react-router-dom";
import { Button, InputAdornment } from '@mui/material';
import { Key, useContext, useState } from 'react';
import { CharacterContext } from '../CharacterContext';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
import CustomizedDialogs from '../Components/Dialog';
import { ResultsSubInt } from "../Types/MountTypes";

export default function Mounts() {
const {post, setpost}:any = useContext(CharacterContext);
console.log(post)
const [open, setOpen] = useState(false);
const [selectedMount, setMount] = useState({});

const [selection, setSelection] = useState('All');
const menuItems = ['All', 'Collected', 'Uncollected'];
const [searchText, setSearchText] = useState("");
const [filMounts, setFilMounts] = useState((post.mounts.results ?? []))

const handleSearchChange = (ee:string) => {
    setSearchText(ee)
    setFilMounts(
        post.mounts?.results?.filter((bbd:ResultsSubInt )=> bbd.name.toLowerCase().includes(ee.toLowerCase())
    )
)
};

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
        {/* <div *ngIf="showSpinner" className="spin-overlay">
            <mat-spinner></mat-spinner>

        </div> */}
        <section>
            {/* <div className="err-cont" *ngIf="errorShow">{{errMsg}}</div> */}
            <div className="items-collected">
                <p>
                    {post.character.mounts.length} of {post.mounts.count} obtained.
                </p>
            </div>

            <div className="minion-container">

                {filMounts.map((mount:any, index: Key | null | undefined)=>{
                return(
                <div className={`minion-box ${selection} ${mount.isOwned ? "owned" : "" }`} key={mount.id} onClick={()=>
                    handlemountClick(mount)}>
                    <img src={mount.image} alt={mount.name} />
                    <span>{mount.name}</span>
                </div>)

                })}
            </div>

        </section>
    </div>
    <CustomizedDialogs open={open} setOpen={setOpen} data={selectedMount} />
</>
);
}