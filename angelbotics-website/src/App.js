import {
    AppBar,
    Button,
    ButtonGroup,
    Drawer, Grid,
    List,
    ListItem,
    ListItemButton,
    Paper, Toolbar,
    Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import {Outlet} from "react-router";
import {Link} from "react-router-dom";



function App() {

    const [drawerState, setDrawerState] = useState(false);
    const [currentPage, setCurrentPage] = useState("/scout/gameform");

    const supportersJSON = require('./pages/json/supporters.json');

    const sponsors3AndAbove = supportersJSON.Sponsors.map((sponsor) => {

        if(sponsor.level <= 3) return sponsor;

    }).filter(Boolean);


    const drawerHighlightColor = "#fcaeae";

    // This code can be used for variable size on mobile vs desktop


    const [isScreenBig, setScreenBig] = useState(false);

    useEffect(() => {

        setScreenBig(window.innerWidth > 1200);
        setCurrentPage(window.location.pathname);

    }, []);


    return (

        <div className="App">

            {/*----------Big Screens----------*/}

            {isScreenBig &&


                <div>


                    <AppBar position="sticky" style={{display: "flex", alignItems: "center", width: "100"}}>


                        <Toolbar>
                            <Button sx={{cursor: 'default'}} component={Link} to={'/'}>
                                <img src='Logo.svg' alt="Angelbotics Logo" height="100" width="100"/>
                            </Button>


                            <ButtonGroup sx={{alignSelf: 'center', m: 2}}>
                                <Button sx={{cursor: 'pointer'}} variant="contained" component={Link} to={'/'}>
                                    <Typography variant={"h6"} sx={{m: 1}}>Home</Typography>
                                </Button>

                                <Button sx={{cursor: 'pointer'}} component={Link} variant="contained"
                                        to={'history'}>
                                    <Typography variant={"h6"} sx={{m: 1}}>History</Typography>
                                </Button>

                                <Button sx={{cursor: 'pointer'}} component={Link} variant="contained"
                                        to={'firstRobotics'}>
                                    <Typography variant={"h6"} sx={{m: 1}}>FIRST Robotics</Typography>
                                </Button>

                                <Button sx={{cursor: 'pointer'}} component={Link} variant="contained"
                                        to={'supporters'}>
                                    <Typography variant={"h6"} sx={{m: 1}}>Supporters</Typography>
                                </Button>

                                <Button sx={{cursor: 'pointer'}} component={Link} variant="contained"
                                        to={'resources'}>
                                    <Typography variant={"h6"} sx={{m: 1}}>Resources</Typography>
                                </Button>




                            </ButtonGroup>


                        </Toolbar>
                    </AppBar>


                    <Outlet/>

                    <Paper sx={{width: '100%', height: "auto", marginTop: 20}}>

                            <Grid container spacing={2} sx={{ width: '90%', marginLeft: '5%', marginRight: '5%' }}>

                                {
                                    sponsors3AndAbove.map((sponsor) =>
                                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} sx={{ mx: "auto", textAlign: "center", height:"auto" }} key={sponsor.name}>

                                            <a rel="noreferrer noopener" target="_blank"
                                               href={sponsor.website}
                                               style={{color: '#000000'}}
                                               key={sponsor.name}
                                            >
                                                <img src={sponsor.logo} width="auto" height={85} alt={sponsor.name}/>
                                            </a>

                                        </Grid>
                                    )}

                            </Grid>

                    </Paper>


                </div>


            }


            {/*----------Small Screens----------*/}

            {!isScreenBig &&

                <div>

                    <AppBar position="sticky" style={{display: "flex", alignItems: "left", width: "100"}}>

                        <Toolbar>
                        <Button size={"small"} variant={"contained"} sx={{cursor: 'pointer', width: 10, m: 2, marginRight:"auto"}}
                                onClick={() => {
                                    setDrawerState(!drawerState);
                                    setCurrentPage(window.location.pathname);
                                }}>
                            <DensitySmallIcon/>
                        </Button>

                            <Button sx={{cursor: 'default'}} component={Link} to={'/'}>
                                <img src="/Logo.svg" width="80" height="80"  alt={"Angelbotics Logo"}/>
                            </Button>

                        </Toolbar>

                    </AppBar>



                    <Drawer
                        open={drawerState}
                        onClick={() => setDrawerState(false)}
                        onClose={() => setDrawerState(false)}
                    >

                        <List sx={{marginX: '20', backgroundColor:'#ffd4d4', height:"100%", paddingTop:0}}>
                            <ListItem sx={{backgroundColor:'#ab0000'}}>

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

                            <Grid container spacing={2} sx={{ width: '90%', marginLeft: '5%', marginRight: '5%' }}>

                                {
                                    sponsors3AndAbove.map((sponsor) =>
                                        <Grid item xs={6} sm={6} md={4} lg={3} xl={3} sx={{ mx: "auto", textAlign: "center", height:"auto" }} key={sponsor.name}>

                                            <a rel="noreferrer noopener" target="_blank"
                                               href={sponsor.website}
                                               style={{color: '#000000'}}
                                               key={sponsor.name}
                                            >
                                                <img src={sponsor.logo} width="auto" height={65} alt={sponsor.name}/>
                                            </a>

                                        </Grid>
                                    )}

                            </Grid>

                    </Paper>

                </div>


            }


        </div>
    );
}

export default App;
