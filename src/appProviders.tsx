import { ThemeProvider } from "@emotion/react"
import { CharacterProvider } from "./CharacterContext"
import { myTheme } from "./theme"
import { ReactNode } from 'react';

export const AppProviders = ({children} : {children: ReactNode}) => {

    return <ThemeProvider theme={myTheme}>
      <CharacterProvider>
          {children}
     </CharacterProvider>

</ThemeProvider>
}