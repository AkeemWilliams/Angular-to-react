import { ReactNode, createContext,useContext, useReducer } from 'react';


type Action = {type: 'search'} //add more for reducer later
type Dispatch = (action: Action) => void
type State = {}
type CharacterContextProp = {children : ReactNode};

export const CharacterContext = createContext({})

// function profilerReducer(state: State, action: Action){

// switch(action.type){
//     case 'search':{
//         return{...state}
//     }
//     default:{
//         throw new Error(`Unhandled action type: ${action.type}`)
//     }
// }
// }

// export function CharacterProvider({children}:CharacterContextProp){
//     const [state, dispatch] = useReducer(profilerReducer, {})
//     const value = {state, dispatch};

//     return<CharacterContext.Provider value={value}>{children}</CharacterContext.Provider>
    
// }

// export function useProfiler() {
//     const context = useContext(CharacterContext)
//     if (context === undefined) {
//       throw new Error('useProfiler must be used within a CharacterProvider')
//     }
//     return context
//   }