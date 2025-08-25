import {
    AppBar,
    Button,
    ButtonGroup, Divider,
    Drawer, Grid,
    List,
    ListItem,
    ListItemButton,
    Paper, Stack, Toolbar,
    Typography, useMediaQuery
} from "@mui/material";
import {useEffect, useState} from "react";
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import {Outlet, useLocation} from "react-router";
import {Link} from "react-router-dom";
import {mainTheme} from "./theme";


function App() {

    // const resourceJSON = require('./pages/json/resources.json');


    const [drawerState, setDrawerState] = useState(false);
    const [currentPage, setCurrentPage] = useState("/scout/gameform");

    const supportersJSON = require('./pages/json/supporters.json');

    const sponsors3AndAbove = supportersJSON.Sponsors.map((sponsor) => {
        if (sponsor.level <= 3) return sponsor;
    }).filter(Boolean);

    const drawerHighlightColor = "#fcaeae";

    // This code can be used for variable size on mobile vs desktop
    const bigScreen = useMediaQuery(mainTheme.breakpoints.up('sm'));




    const { pathname } = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);



    return (

        <div className="App">
            <div>

                <AppBar position="sticky" style={{alignItems: "center", width: "100", display: "flex"}}>


                    <Toolbar sx={{display: {xs: 'none', sm: 'none', md: 'block'}}}>
                        <Button sx={{}} component={Link} to={'/'}>
                            <img src='/Logo.svg' alt="Angelbotics Logo" height="100" width="100"/>
                        </Button>


                        <ButtonGroup sx={{alignSelf: 'center', m: 2}}>
                            <Button sx={{cursor: 'pointer'}} variant="contained" component={Link} to={'/'}>
                                <Typography variant={"subtitle2"} sx={{m: 1}}>Home</Typography>
                            </Button>

                            <Button sx={{cursor: 'pointer'}} component={Link} variant="contained"
                                    to={'history'}>
                                <Typography variant={"subtitle2"} sx={{m: 1}}>History</Typography>
                            </Button>

                            <Button sx={{cursor: 'pointer'}} component={Link} variant="contained"
                                    to={'firstRobotics'}>
                                <Typography variant={"subtitle2"} sx={{m: 1}}>FIRST Robotics</Typography>
                            </Button>

                            <Button sx={{cursor: 'pointer'}} component={Link} variant="contained"
                                    to={'supporters'}>
                                <Typography variant={"subtitle2"} sx={{m: 1}}>Supporters</Typography>
                            </Button>

                            <Button sx={{cursor: 'pointer'}} component={Link} variant="contained"
                                    to={'resources'}>
                                <Typography variant={"subtitle2"} sx={{m: 1}}>Resources</Typography>
                            </Button>
                        </ButtonGroup>
                    </Toolbar>

                    <Toolbar sx={{
                        display: {xs: 'flex', sm: 'flex', md: 'none'},
                        width: "100%",
                        alignContent: "left",
                        justifyContent: 'space-evenly'
                    }}>
                        <Button size={"small"} variant={"contained"}
                                sx={{cursor: 'pointer', width: 10, m: 2, marginRight: "auto"}}
                                aria-label="Open Navigation"
                                onClick={() => {
                                    setDrawerState(!drawerState);
                                    setCurrentPage(window.location.pathname);
                                }}>
                            <DensitySmallIcon/>
                        </Button>


                        <Button sx={{cursor: 'default'}} component={Link} to={'/'}>
                            <img src="/Logo.svg" width="80" height="80" alt={"Angelbotics Logo"}/>
                        </Button>

                    </Toolbar>

                </AppBar>

                <Drawer
                    open={drawerState}
                    onClick={() => setDrawerState(false)}
                    onClose={() => setDrawerState(false)}
                >

                    <List sx={{marginX: '20', backgroundColor: '#ffd4d4', height: "100%", paddingTop: 0}}>
                        <ListItem sx={{backgroundColor: '#ab0000'}}>

                            <Button sx={{cursor: 'default'}} component={Link} to={'/'}>
                                <img src="/Logo.svg" width="80" height="80" alt={"Angelbotics Logo"}/>
                            </Button>

                        </ListItem>
                        <ListItem>
                            <ListItemButton sx={{cursor: 'pointer'}} component={Link} to={'/'}>
                                <Typography variant={"h6"} sx={{m: 1}}>Home</Typography>
                            </ListItemButton>
                        </ListItem>
                        <ListItem sx={{backgroundColor: currentPage === "/history" ? drawerHighlightColor : ''}}>
                            <ListItemButton sx={{cursor: 'pointer'}} component={Link} to={'/history'}>
                                <Typography variant={"h6"} sx={{m: 1}}>History</Typography>
                            </ListItemButton>
                        </ListItem>
                        <ListItem sx={{backgroundColor: currentPage === "/firstRobotics" ? drawerHighlightColor : ''}}>
                            <ListItemButton sx={{cursor: 'pointer'}} component={Link} to={'/firstRobotics'}>
                                <Typography variant={"h6"} sx={{m: 1}}>FIRST Robotics</Typography>
                            </ListItemButton>
                        </ListItem>
                        <ListItem sx={{backgroundColor: currentPage === "/supporters" ? drawerHighlightColor : ''}}>
                            <ListItemButton sx={{cursor: 'pointer'}} component={Link} to={'/supporters'}>
                                <Typography variant={"h6"} sx={{m: 1}}>Supporters</Typography>
                            </ListItemButton>
                        </ListItem>
                        <ListItem sx={{backgroundColor: currentPage === "/resources" ? drawerHighlightColor : ''}}>
                            <ListItemButton sx={{cursor: 'pointer'}} component={Link} to={'/resources'}>
                                <Typography variant={"h6"} sx={{m: 1}}>Resources</Typography>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Drawer>


                <Outlet/>

                <Paper sx={{width: '100%', height: "auto", marginTop: 20}}>

                    <Grid container spacing={2} sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>

                        {
                            sponsors3AndAbove.map((sponsor) =>
                                <Grid item xs={6} sm={6} md={4} lg={3} xl={3}
                                      sx={{mx: "auto", textAlign: "center", height: "auto"}} key={sponsor.name}>

                                    <a rel="noreferrer noopener" target="_blank"
                                       href={sponsor.website}
                                       style={{color: '#000000'}}
                                       key={sponsor.name}
                                    >
                                        <img src={sponsor.logo} width={bigScreen ? "auto" : "50%"}
                                             height={bigScreen ? 85 : "auto"} alt={sponsor.name}/>
                                    </a>

                                </Grid>
                            )}
                    </Grid>
                    <Divider variant={"middle"} sx={{height:30}}/>
                    <div style={{
                        width: "100%",
                        marginLeft: "auto",
                        marginRight: "auto",
                        maxWidth: 1000,
                        height: "auto",
                        paddingBottom: 10,
                        // alignItems: "center",
                        justifyContent: "space-evenly",
                        marginTop: 20,
                        display: "flex",
                    }}>
                        {/*<Typography variant={"body"} sx={{fontSize: "1rem", mb:5}}>*/}
                        {/*    {resourceJSON.contactUs.email}*/}
                        {/*</Typography>*/}

                        <Stack sx={{textAlign: "center"}}>
                            <Grid container sx={{justifyContent: "center"}}>
                                <div>
                                    <Button sx={{ p:5}} component={Link} to={'/'}>
                                        <img src='/Logo.svg' alt="Angelbotics Logo"
                                            style={{
                                                background: "red",
                                                borderRadius: 5,
                                                width: bigScreen ? 200 : 100,
                                                height: bigScreen ? 200 : 100,
                                                
                                                // aspectRatio: 1,
                                                }}/>
                                    </Button>
                                </div>
                                <Stack sx={{textAlign: "center"}}>
                                    <a href={"https://east.dpsk12.org/"} target="_blank" rel="noopener noreferrer">
                                        <img src='images/logos/East.png' alt="East Logo"
                                            style={{
                                                borderRadius: 5,
                                                width: "100%",
                                                maxWidth: 150,
                                                aspectRatio: 1,
                                                
                                                }}/>
                                    </a>

                                    <Typography variant={"body"} sx={{fontSize: "1rem"}}>
                                        East High School
                                    </Typography>
                                    <Typography variant={"body"} sx={{fontSize: "1rem"}}>
                                        1600 City Park Esplanade
                                    </Typography>
                                    <Typography variant={"body"} sx={{fontSize: "1rem"}}>
                                        Denver, CO 80206
                                    </Typography>
                                </Stack>
                            </Grid>
                            <div style={{
                                marginTop: 20
                            }}>
                                <Typography> 
                                    {/* TODO: make this pretty and look good on mobile */}
                                    Angelbotics, PO Box 300023, Denver, CO 80203
                                </Typography>
                            </div>
                        </Stack>
                    </div>


                </Paper>

            </div>

        </div>
    );
}

export default App;
