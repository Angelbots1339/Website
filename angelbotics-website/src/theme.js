import { createTheme } from '@mui/material/styles';


const mainTheme = createTheme({

    palette: {
        type: 'light',
        primary: {
            // main: '#ff001b',
            main:'#ab0000',
        },
        secondary: {
            main: '#ffffff',
        },
        background: {
            // default: '#ffd4d4',
            default: '#ffe9e9',
        },
    },
    typography: {
        h3: {
            fontFamily: 'Righteous',
        },
        subtitle1: {
            fontSize: 20,
        },
        fontFamily: 'Barlow',
    },
});

export {mainTheme};
