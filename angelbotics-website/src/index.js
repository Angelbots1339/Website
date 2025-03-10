import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {mainTheme} from "./theme";
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Home from "./pages/home";
import FirstRobotics from "./pages/firstRobotics";
import History from "./pages/history";
import Resources from "./pages/resources";
import Supporters from "./pages/supporters";

const redirectsJSON = require("./pages/json/redirects.json");

const ExternalRedirect = (link) => {
    useEffect(() => {
        window.location.href = link.link;
    })
    return <h1>Redirecting...</h1>
};

ReactDOM.render(
    <ThemeProvider theme={mainTheme}>
    <CssBaseline/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="history" element={<History/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="firstRobotics" element={<FirstRobotics/>}/>
                    <Route path="resources" element={<Resources/>}/>
                    <Route path="supporters" element={<Supporters/>}/>
                    {redirectsJSON.redirects.map((json, idx) => {
                        return <Route
                            path={json.path}
                            key={idx}
                            element={<ExternalRedirect link={json.link}/>}
                        />
                    })}
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

