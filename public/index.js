import React from 'react';
import ReactDOM from 'react-dom';
import ScoutPage from './components/scout/ScoutPage'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PitForm from "./components/scout/PitForm";
import GameForm from "./components/scout/GameForm";
import { mainTheme } from "./theme";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material'
import DriveTeamForm from "./components/scout/DriveTeamForm";



ReactDOM.render(
    <ThemeProvider theme={mainTheme} >
        <CssBaseline />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="scout" element={<ScoutPage />}>
                    <Route path="pitform" element={<PitForm />} />
                    <Route path="gameform" element={<GameForm />} />
                    <Route path="driveteamform" element={<DriveTeamForm />} />
                </Route>
               
            </Routes>
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();