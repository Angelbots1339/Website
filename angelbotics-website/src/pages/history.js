import {useEffect, useState} from "react";
import {Box, Paper, Tab, Tabs} from "@mui/material";
import RobotHistoryTabComputer from "./robotHistoryTabComputer";
import React from "react";
import RobotHistoryTabMobile from "./robotHistoryTabMobile";


export default function History() {


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

        setScreenBig(window.innerWidth > 800);

    }, []);

    return (

        <div>


            {/*----------Big Screens----------*/}

            {isScreenBig &&

                <div>

                    <div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            width: "95%",
                            height: "auto",
                            marginLeft: '2.5%',
                            marginTop: 100
                        }}>


                            <Paper sx={{width: '20%', height: "auto", marginBottom: 30}}>

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


                                        <Tab label="2022" {...a11yProps(0)} sx={{fontSize: 50, fontFamily: 'serif'}}/>
                                        <Tab label="2020" {...a11yProps(1)} sx={{fontSize: 50, fontFamily: 'serif'}}/>
                                        <Tab label="2019" {...a11yProps(2)} sx={{fontSize: 50, fontFamily: 'serif'}}/>
                                        <Tab label="2018" {...a11yProps(3)} sx={{fontSize: 50, fontFamily: 'serif'}}/>
                                        <Tab label="2017" {...a11yProps(4)} sx={{fontSize: 50, fontFamily: 'serif'}}/>


                                    </Tabs>

                                </Box>


                            </Paper>


                            <Paper sx={{width: '80%', height: 2000, marginLeft: '5%', marginBottom: 30}}>


                                <RobotHistoryTabComputer value={value} index={0}/>
                                <RobotHistoryTabComputer value={value} index={1}/>
                                <RobotHistoryTabComputer value={value} index={2}/>
                                <RobotHistoryTabComputer value={value} index={3}/>
                                <RobotHistoryTabComputer value={value} index={4}/>



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


                                        <Tab label="2022" {...a11yProps(0)} sx={{fontSize: 30, fontFamily: 'serif'}}/>
                                        <Tab label="2020" {...a11yProps(1)} sx={{fontSize: 30, fontFamily: 'serif'}}/>
                                        <Tab label="2019" {...a11yProps(2)} sx={{fontSize: 30, fontFamily: 'serif'}}/>
                                        <Tab label="2018" {...a11yProps(3)} sx={{fontSize: 30, fontFamily: 'serif'}}/>
                                        <Tab label="2017" {...a11yProps(4)} sx={{fontSize: 30, fontFamily: 'serif'}}/>


                                    </Tabs>

                                </Box>


                            </Paper>


                            <Paper sx={{width: '95%', height: 2000, marginLeft: '2.5%', marginBottom: 30}}>


                                <RobotHistoryTabMobile value={value} index={0}/>
                                <RobotHistoryTabMobile value={value} index={1}/>
                                <RobotHistoryTabMobile value={value} index={2}/>
                                <RobotHistoryTabMobile value={value} index={3}/>
                                <RobotHistoryTabMobile value={value} index={4}/>


                            </Paper>

                        </div>
                    </div>
                </div>

            }


        </div>

    );
}
