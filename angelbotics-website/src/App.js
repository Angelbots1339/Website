import {
    AppBar, Box,
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
import SimpleImageSlider from "react-simple-image-slider";
import homeJSON from "./pages/home.json";


function App() {

    const [drawerState, setDrawerState] = useState(false);
    const [currentPage, setCurrentPage] = useState("/scout/gameform");

    const sponsorsJSON = require('./pages/sponsors.json');

    const sponsorsSlideshow = sponsorsJSON.Sponsors.map((sponsor) => {

        if(sponsor.level <= 3) return {"url":sponsor.logo};

        return;

    }).filter(Boolean);

    const sponsors3AndAbove = sponsorsJSON.Sponsors.map((sponsor) => {

        if(sponsor.level <= 3) return sponsor;

        return;

    }).filter(Boolean);


    const drawerHighlightColor = "#fcaeae";

    // This code can be used for variable size on mobile vs desktop


    const [isScreenBig, setScreenBig] = useState(false);


    useEffect(() => {


        setScreenBig(window.innerWidth > 800);
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
                                <img src='Logo.svg' alt="Angelbotics Logo" height="100" width="100"
                                     sx={{paddingRight: 100}}/>
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

                    <Paper sx={{width: '100%', height: 150, marginTop: 20}}>


                            <Grid container spacing={2} sx={{ width: '90%', marginLeft: '5%', marginRight: '5%' }}>

                                {
                                    sponsors3AndAbove.map((sponsor) =>

                                        <Grid item xs={4} sx={{ mx: "auto", textAlign: "center", height:90 }} key={sponsor}>

                                            <a rel="noreferrer noopener" target="_blank"
                                               href={sponsor.website}
                                               style={{color: '#000000'}}>
                                                <img src={sponsor.logo} width="auto" height={85}/>
                                            </a>

                                        </Grid>
                                    )
                                }



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
                                <img src="/Logo.svg" width="80" height="80"/>
                            </Button>

                        </Toolbar>

                    </AppBar>



                    <Drawer
                        open={drawerState}
                        onClick={() => setDrawerState(false)}
                        onClose={() => setDrawerState(false)}
                    >

                        <List sx={{marginX: '20', backgroundColor:'#ffd4d4', height:"100%"}}>
                            <ListItem sx={{backgroundColor:'#ff001b'}}>

                                <Button sx={{cursor: 'default'}} component={Link} to={'/'}>
                                    <img src="/Logo.svg" width="80" height="80"/>
                                </Button>

                            </ListItem>
                            <ListItem>
                                <ListItemButton sx={{cursor: 'pointer'}} component={Link} to={'/'}>
                                    <Typography variant={"h4"} sx={{m: 1}}>Home</Typography>
                                </ListItemButton>
                            </ListItem>
                            <ListItem sx={{backgroundColor: currentPage === "/history" ? drawerHighlightColor : ''}}>
                                <ListItemButton sx={{cursor: 'pointer'}} component={Link} to={'/history'}>
                                    <Typography variant={"h5"} sx={{m: 1}}>History</Typography>
                                </ListItemButton>
                            </ListItem>
                            <ListItem sx={{backgroundColor: currentPage === "/firstRobotics" ? drawerHighlightColor : ''}}>
                                <ListItemButton sx={{cursor: 'pointer'}} component={Link} to={'/firstRobotics'}>
                                    <Typography variant={"h5"} sx={{m: 1}}>FIRST Robotics</Typography>
                                </ListItemButton>
                            </ListItem>
                            <ListItem sx={{backgroundColor: currentPage === "/supporters" ? drawerHighlightColor : ''}}>
                                <ListItemButton sx={{cursor: 'pointer'}} component={Link} to={'/supporters'}>
                                    <Typography variant={"h5"} sx={{m: 1}}>Supporters</Typography>
                                </ListItemButton>
                            </ListItem>
                            <ListItem sx={{backgroundColor: currentPage === "/resources" ? drawerHighlightColor : ''}}>
                                <ListItemButton sx={{cursor: 'pointer'}} component={Link} to={'/resources'}>
                                    <Typography variant={"h5"} sx={{m: 1}}>Resources</Typography>
                                </ListItemButton>
                            </ListItem>





                        </List>
                    </Drawer>


                    <Outlet/>


                    <Paper sx={{width: '100%', height: 150, marginTop: 20}}>


                        <Box display="flex" alignItems="center" justifyContent="center" sx={{marginTop: 5}}>

                            <SimpleImageSlider
                                width="60%"
                                height={100}
                                images={sponsorsSlideshow}
                                showBullets={false}
                                showNavs={false}
                                loop={true}
                                autoPlay={true}
                                autoPlayDelay={4}
                                bgColor={"#000000"}
                                onClick={(idx, event) => {
                                    window.open(sponsorsJSON.Sponsors[idx].website);
                                }}
                            />


                        </Box>


                    </Paper>

                </div>


            }


        </div>
    );
}

export default App;