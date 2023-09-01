import {Suspense} from "react";
import {Box, CircularProgress, Grid, Paper, Stack, Tab, Tabs, Typography, useMediaQuery} from "@mui/material";
import React from "react";
import {mainTheme} from "../theme";

const RobotHistoryTabComputer = React.lazy(() => import("./robotHistoryTab"));


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

    const bigScreen = useMediaQuery(mainTheme.breakpoints.up('sm'));

    return (

        <div>

            {/*----------Big Screens----------*/}

            <div>

                <Box sx={{display: {xs: 'none', sm: 'none', md: 'block'}}}>
                    <Grid container spacing={1} sx={{width: "95%", m: "2.5%"}}>

                        <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
                            <Paper sx={{
                                width: '100%',
                                height: "100%",
                                marginBottom: 0,
                                boxShadow: 5,
                                mt: "12.5%",
                                borderRadius: 5
                            }}>
                                <Box
                                    sx={{flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "100%", borderRadius: 5}}
                                >
                                    <Tabs
                                        orientation="vertical"
                                        variant="scrollable"
                                        value={value}
                                        onChange={handleChange}
                                        aria-label="Vertical tabs"
                                        sx={{borderRight: 1, borderColor: 'divider', width: "100%", borderRadius: 5}}
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
                        </Grid>

                        <Grid item xs={12} sm={10} md={10} lg={10} xl={10}>
                            <Paper sx={{
                                width: '98%',
                                height: '100%',
                                marginLeft: '1%',
                                marginBottom: 0,
                                alignItems: 'center',
                                boxShadow: 5,
                                borderRadius: 5
                            }}>

                                <div style={{
                                    alignItems: "center",
                                    width: "100%",
                                    height: "auto",
                                }}>


                                    <Suspense fallback={Fallback()}>
                                        {data.tabs.map((year, index) =>
                                            <RobotHistoryTabComputer value={value} index={index}/>
                                        )}
                                    </Suspense>


                                </div>

                            </Paper>
                        </Grid>

                    </Grid>
                </Box>
            </div>


            {/*----------Small Screens----------*/}


            <div>


                <Box sx={{display: {xs: 'block', sm: 'block', md: 'none'}}}>
                    <div style={{
                        alignItems: "center",
                        width: "95%",
                        height: "auto",
                        marginLeft: '2.5%',
                        marginTop: 10
                    }}>


                        <Paper sx={{width: '100%', height: "auto", marginBottom: 5, borderRadius: 5}}>

                            <Box
                                sx={{flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 60, borderRadius: 5}}
                            >
                                <Tabs
                                    variant="scrollable"
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="Vertical tabs example"
                                    sx={{borderRight: 1, borderColor: 'divider', width: "100%", borderRadius: 5}}
                                >

                                    {data.tabs.map((year, index) =>

                                        <Tab label={year.year} {...a11yProps(index)}
                                             sx={{fontSize: 30, fontFamily: 'serif'}}/>
                                    )}


                                </Tabs>

                            </Box>


                        </Paper>

                        <Paper sx={{
                            width: '95%',
                            height: 'auto',
                            marginLeft: '2.5%',
                            marginBottom: 30,
                            borderRadius: 5
                        }}>
                            <Suspense fallback={Fallback()}>

                                {data.tabs.map((year, index) =>
                                    <RobotHistoryTabComputer value={value} index={index}/>
                                )}
                            </Suspense>
                        </Paper>

                    </div>
                </Box>
            </div>

        </div>

    );
}

export const Fallback = () => <Box display={"flex"} sx={{width: "100%", height: 100, paddingTop: 20, justifyContent:"center"}}>
    <Stack sx={{}}>
        <Typography variant="h5">Loading...</Typography>
        <CircularProgress/>
    </Stack>
</Box>;