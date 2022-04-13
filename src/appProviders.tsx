import { ThemeProvider } from "@emotion/react"
import { CharacterProvider } from "./CharacterContext"
import { myTheme } from "./theme"
import { ReactNode } from 'react';
import  store  from './store'
import { Provider } from 'react-redux';
import { StoreProvider } from 'easy-peasy';


export const AppProviders = ({children} : {children: ReactNode}) => {

    return <ThemeProvider theme={myTheme}>
      <StoreProvider store={store}>
          {children}
     </StoreProvider>

</ThemeProvider>
}