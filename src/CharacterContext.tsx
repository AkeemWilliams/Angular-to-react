import { ReactNode, createContext,useContext, useReducer, useState } from 'react';


type CharacterContextProp = {children : ReactNode};



export const CharacterContext = createContext({});

//Explore better context implementation
// export function CharacterProvider({children}:CharacterContextProp){
//     const [post, setPost] = useState(null);
//     const value = {post, setPost};

//     return (
//         <CharacterContext.Provider value={value}>
//         {children}  
//         </CharacterContext.Provider>
//     )
// }