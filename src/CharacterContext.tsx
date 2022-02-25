import { ReactNode, createContext,useContext, useReducer } from 'react';


type Action = {type: 'search'} //add more for reducer later
type Dispatch = (action: Action) => void
type State = {}
type CharacterContextProp = {children : ReactNode};

export const CharacterContext = createContext({})