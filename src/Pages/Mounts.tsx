import { InputAdornment } from '@mui/material';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
import CustomizedDialogs from '../Components/Dialog';
import { ResultsSubInt } from "../Types/MountTypes";
import { useAppSelector } from './../hooks';
import { selectChar} from '../Features/characterSlice';



export default function Mounts() {

const appStore = useAppSelector(selectChar);

const [open, setOpen] = useState(false);
const [selectedMount, setMount] = useState({});

const [selection, setSelection] = useState('All');
const menuItems = ['All', 'Collected', 'Uncollected'];
const [searchText, setSearchText] = useState("");
const [filMounts, setFilMounts] = useState((appStore.mounts.results ?? []))

const handleSearchChange = (e:string) => {
    setSearchText(e)
    setFilMounts(appStore.mounts.results!.filter((mount)=> mount.name.toLowerCase().includes(e.toLowerCase())))
};

const handleChange = (event: SelectChangeEvent) => {
    setSelection(event.target.value);
};

const handlemountClick = (mount:ResultsSubInt) =>{
    setMount(mount)
    setOpen(true);
}

if(appStore == undefined){
    window.location.href = "/";
}

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
        <section>
            <div className="items-collected">
                <p>
                    {appStore.character.mounts.length} of {appStore.mounts.count} obtained.
                </p>
            </div>

            <div className="minion-container">

                {filMounts.map((mount:ResultsSubInt)=>{
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