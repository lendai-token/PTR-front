import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    typography: {
      fontFamily: string;
    };
  }
}

const theme = createTheme({ 
    typography: {
         fontFamily: 'Trebuchet MS', 
    },
}); 

export default theme;