import {useEffect, useState} from "react";
import {Box, Paper, Tab, Tabs} from "@mui/material";
import RobotHistoryTabComputer from "./robotHistoryTabComputer";
import React from "react";
import RobotHistoryTabMobile from "./robotHistoryTabMobile";


export default function History() {

    const data = require('./json/history.json');


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function a11yProps(index) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }


    // This code can be used for variable size on mobile vs desktop
    //
    //
    const [isScreenBig, setScreenBig] = useState(false);


    useEffect(() => {

        setScreenBig(window.innerWidth > 1200);

    }, []);

    return (

        <div>


            {/*----------Big Screens----------*/}

            {isScreenBig &&

                <div>

                    <div>
                        <div style={{
                            display: "flex",
                            alignItems: "start",
                            width: "95%",
                            height: "auto",
                            marginLeft: '2.5%',
                            marginTop: 100
                        }}>


                            <Paper sx={{width: '20%', height: "auto", marginBottom: 10}}>
                                <Box
                                    sx={{flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 2000}}
                                >
                                    <Tabs
                                        orientation="vertical"
                                        variant="scrollable"
                                        value={value}
                                        onChange={handleChange}
                                        aria-label="Vertical tabs example"
                                        sx={{borderRight: 1, borderColor: 'divider', width: "100%"}}
                                    >

                                        {data.tabs.map((year, index) =>

                                            <Tab label={year.year} {...a11yProps(index)}
                                                 sx={{fontSize: 50, fontFamily: 'serif'}}
                                                 key={year.year}
                                            />
                                        )}


                                    </Tabs>
                                </Box>
                            </Paper>


                            <Paper sx={{
                                width: '80%',
                                height: 'auto',
                                marginLeft: '5%',
                                marginBottom: 10,
                                alignItems: 'center'
                            }}>

                                <div style={{
                                    alignItems: "center",
                                    width: "100%",
                                    height: "auto",
                                    marginLeft: '0%'
                                }}>


                                    {data.tabs.map((year, index) =>

                                        <RobotHistoryTabComputer value={value} index={index}/>
                                    )}


                                </div>

                            </Paper>

                        </div>
                    </div>
                </div>
            }


            {/*----------Small Screens----------*/}

            {!isScreenBig &&

                <div>


                    <div>
                        <div style={{
                            alignItems: "center",
                            width: "95%",
                            height: "auto",
                            marginLeft: '2.5%',
                            marginTop: 10
                        }}>


                            <Paper sx={{width: '100%', height: "auto", marginBottom: 5}}>

                                <Box
                                    sx={{flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 60}}
                                >
                                    <Tabs
                                        variant="scrollable"
                                        value={value}
                                        onChange={handleChange}
                                        aria-label="Vertical tabs example"
                                        sx={{borderRight: 1, borderColor: 'divider', width: "100%"}}
                                    >

                                        {data.tabs.map((year, index) =>

                                            <Tab label={year.year} {...a11yProps(index)}
                                                 sx={{fontSize: 30, fontFamily: 'serif'}}/>
                                        )}


                                    </Tabs>

                                </Box>


                            </Paper>


                            <Paper sx={{width: '95%', height: 'auto', marginLeft: '2.5%', marginBottom: 30}}>


                                {data.tabs.map((year, index) =>

                                    <RobotHistoryTabMobile value={value} index={index}/>
                                )}


                            </Paper>

                        </div>
                    </div>
                </div>

            }


        </div>

    );
}
