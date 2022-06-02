import { createTheme } from '@mui/material/styles';


const mainTheme = createTheme({

    palette: {
        type: 'light',
        primary: {
            main: '#ff001b',
        },
        secondary: {
            main: '#ffffff',
        },
        background: {
            default: '#ffd4d4',
        },
    },
});

export {mainTheme};
