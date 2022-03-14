import { Link } from "react-router-dom";
import { AppBar, Button, ButtonGroup, CssBaseline } from "@mui/material";
import { mainTheme } from "./theme";
import { ThemeProvider } from "@emotion/react";


const theme = mainTheme;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div>
                <div style={{ width: "auto", alignItems: "center" }}>
                    <AppBar  style={{display: "flex", alignItems:"center", width:"100"}}>

                        <ButtonGroup variant={"contained"} sx={{ m: 2 }}>
                            <Button component={Link} to={'/scout/pitForm'}>Scout</Button>
                            <Button component={Link} to={'/superScout/teamGrid'}>SuperScout</Button>
                        </ButtonGroup>
                    </AppBar>
                </div>
            </div>

        </ThemeProvider>

    );
}

export default App;
