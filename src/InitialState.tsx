import { Character } from "./Types/CharacterTypes";
import { Query, ResultsSubInt } from "./Types/MinionTypes";
import { Mounts } from "./Types/MountTypes";

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


export const initialState: cState = {
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