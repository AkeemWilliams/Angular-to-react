import { Character } from './../Types/CharacterTypes';
import { Minions } from './../Types/MinionTypes';
import { Mounts } from './../Types/MountTypes';
import axios from "axios";


import { createAsyncThunk, createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import type { RootState } from './../store';


const mountsApi = 'https://ffxivcollect.com/api/mounts';
const minionsApi = 'https://ffxivcollect.com/api/minions';
const characterApi = `http://localhost:3001/samplere`;

// const getMounts = () => axios.get(mountsApi);
// const getMinions = () => axios.get(minionsApi);


export const fetchChar = createAsyncThunk(
  'getChara/FetchCharacter',
  async(userId, thunkAPI) =>{
    const cresp = await axios.get(characterApi);
    return cresp.data
  }
)
export const fetchMounts = createAsyncThunk(
  'getChara/FetchMounts',
  async() =>{
    const moresp = await axios.get(mountsApi);
    const mounts:Mounts = moresp.data;
    mounts.results?.sort((a , b ) => a.name.localeCompare(b.name))
    return mounts;

  }
)

export const fetchMinions = createAsyncThunk(
  'getChara/FetchMinions',
  async() =>{
    const miresp = await axios.get(minionsApi);
    const minions:Minions = miresp.data;
    minions.results?.sort((a , b ) => a.name.localeCompare(b.name))
    return minions;

  }
)


export interface cState {
    character: Character;
    mounts:Mounts;
    minions:Minions;
    loaded:boolean;
}


const initialState: cState = {
    character: {  
        id: 0,
        name: '',
        titleId: 0,
        worldId: 0,
        iconUrl: '',
        imageUrl: '',
        profile: '',
        clanId: null,
        genderId: 0,
        guardianId: 0,
        city: '',
        gcId: 0,
        birthdate: '',
        fcId: null,
        legacy: false,
        achievementsPrivate: false,
        createdAt: 0,
        updatedAt: 0,
        deleted: false,
        fcName: null,
        clanId2: 0,
        private: false,
        achievementRank: '',
        globalAchievementRank: '',
        mountRank: '',
        globalMountRank: '',
        minionRank: '',
        globalMinionRank: '',
        gcName: '',
        raceName: null,
        tribeName: null,
        genderName: '',
        guardianName: '',
        dcId: 0,
        dcName: '',
        worldName: '',
        mounts: [],
        minions: [],
        achievements: [],
        barding: null,
        blueSpell: null,
        emote: null,
        fish: null,
        hair: null,
        hunt: null,
        leve: null,
        masterBook: null,
        orchestrion: null,
        sightseeing: null,
        relic: null,
        triadCard: null,
        triadNpc: null,
        fashion: null,
        bozjaNote: null,
        status: '',
        wouldUpdateButMaint: false,
        deployTime: 0},
    mounts: {
        count: 0,
        query: {},
        results:[]
    },
    minions:{
        count: 0,
        query: {},
        results:[]
    },
    loaded:false
}

  export const characterSlice = createSlice({
    name: 'getChara',
    initialState,
    reducers: {
      getCharacterR: (state, action: PayloadAction<any>) => {

        console.log(state);
        state = action.payload;
        console.log('sds',state);

      },
      updateCharacter:(state)=>{

         if(state.character.mounts != null)
        state.mounts.results = state.mounts.results?.map((o1) =>{
             if(state.character.mounts.findIndex((i) => i.id === o1.id) != -1){
               return ({...o1, isOwned: true});
             }else{
                 return o1
             }
         })

         if(state.character.minions != null)
         state.minions.results = state.minions.results?.map((o1) =>{
              if(state.character.minions.findIndex((i) => i.id === o1.id) != -1){
                return ({...o1, isOwned: true});
              }else{
                  return o1
              }
          })
          state.loaded = true;
             return state;
      }
    },extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchChar.fulfilled, (state, action) => {
      state.character = action.payload
    })
    builder.addCase(fetchMounts.fulfilled, (state, action) => {
      state.loaded = false;
      state.mounts = action.payload
    })
    builder.addCase(fetchMinions.fulfilled, (state, action) => {
      state.minions = action.payload
    })
  },
  })

  // Action creators are generated for each case reducer function
export const { updateCharacter } = characterSlice.actions;
export const selectChar = (state: RootState) => state.character;


export default characterSlice.reducer