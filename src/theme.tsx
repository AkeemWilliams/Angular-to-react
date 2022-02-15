import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

export const myTheme = createTheme({
    palette: {
        mode:'dark',
        primary: {
          main: '#8c32d6',
          dark: '#350a5c',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#f50057',
        },
      },
});