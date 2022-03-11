import Button from '@mui/material/Button';
import { ReactNode, createContext, useState } from 'react';
import { Link } from 'react-router-dom';

type CharacterContextProp = {children : ReactNode};

export const CharacterContext = createContext({});

// TODO:Kent Dodds type implementation
export function CharacterProvider({children}:CharacterContextProp){
    const [post, setPost] = useState(null);
    const value = {post, setPost};

    return (
        <CharacterContext.Provider value={value}>
        {children}  
        </CharacterContext.Provider>
    )
}