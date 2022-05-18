import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {mainTheme} from "./theme";
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import FirstRobotics from "./pages/firstRobotics";
import History from "./pages/history";


ReactDOM.render(
    <ThemeProvider theme={mainTheme}>
    <CssBaseline/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="firstRobotics" element={<FirstRobotics/>}/>
                    <Route path="history" element={<History/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
