import { createStore, action, thunk, Thunk } from 'easy-peasy';
import { Action } from 'easy-peasy';
import { Character } from './Types/CharacterTypes';
import { Minions, Query, ResultsSubInt } from './Types/MinionTypes';
import { Mounts } from './Types/MountTypes';
import axios from "axios";



export interface cState {
  character: Character;
  mounts:Mounts;
  minions:{
    count: number;
    query: Query;
    results ? : (ResultsSubInt)[] | null;
  };
  loaded:boolean;
}

export interface StoreModel {
  characterState:cState;
  addChar: Action<StoreModel, Character>;
  addMounts:Action<StoreModel, Mounts>;
  addMinions:Action<StoreModel, Minions>
  updateState: Action<StoreModel, cState | undefined>;
  fetchChar:Thunk<StoreModel, Character | undefined>;
  fetchMounts:Thunk<StoreModel, Mounts | undefined>;
  fetchMinions:Thunk<StoreModel, Minions | undefined>;

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
const mountsApi = 'https://ffxivcollect.com/api/mounts';
const minionsApi = 'https://ffxivcollect.com/api/minions';
const characterApi = `http://localhost:3001/samplere`;

// const getMounts = () => axios.get(mountsApi);
// const getMinions = () => axios.get(minionsApi);


 const store = createStore<StoreModel>({
        characterState: initialState,
        addChar: action((state, payload) => {
          console.log('cpay', [payload, state]);
          state.characterState.character = payload;
        }),
        addMounts: action((state, payload)=>{
          console.log('mopay', [payload, state]);

          state.characterState.mounts = payload;
        }),
        addMinions: action((state, payload)=>{
          console.log('mipay', [payload, state]);

          state.characterState.minions = payload;
        }),
        updateState: action((state, _payload)=>{
          if(state.characterState.character.mounts != null)

          state.characterState.mounts.results = state.characterState.mounts.results?.map((o1) =>{
               if(state.characterState.character.mounts.findIndex((i) => i.id === o1.id) != -1){
                 return ({...o1, isOwned: true});
               }else{
                   return o1
               }
           })
  
           if(state.characterState.character.minions != null)
           state.characterState.minions.results = state.characterState.minions.results?.map((o1) =>{
                if(state.characterState.character.minions.findIndex((i) => i.id === o1.id) != -1){
                  return ({...o1, isOwned: true});
                }else{
                    return o1
                }
            })
            state.characterState.loaded = true;
               return state;
        }),
        fetchChar: thunk(async (actions)=>{

          const result = await axios.get(characterApi);
          actions.addChar(result.data)
        }),
        fetchMounts:thunk(async (actions, payload)=>{

          const result = await axios.get(mountsApi);
          const mounts:Mounts = await result.data;
          mounts.results?.sort((a , b ) => a.name.localeCompare(b.name))
          actions.addMounts(mounts);
          
        }),
        fetchMinions: thunk(async (actions, payload)=>{
          const result = await axios.get(minionsApi);
          actions.addMinions(result.data)

        })

  })

  export default store;

console.log(store);





// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch