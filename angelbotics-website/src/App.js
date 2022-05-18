import {
    AppBar,
    Button,
    ButtonGroup,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    Paper,
    Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import {Outlet} from "react-router";
import {Link} from "react-router-dom";


function App() {

    const [drawerState, setDrawerState] = useState(false);
    const [currentPage, setCurrentPage] = useState("/scout/gameform");


    // This code can be used for variable size on mobile vs desktop
    //
    //
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
        <AppBar position="sticky" style={{display: "flex", alignItems: "left", width: "100"}}>

            <ButtonGroup sx={{alignSelf: 'center', m: 2}}>
                <Button sx={{cursor: 'pointer'}} variant="contained" component={Link} to={'/'}>
                    <Typography variant={"h6"} sx={{m: 1}}>Home</Typography>
                </Button>


                <Button sx={{cursor: 'pointer'}} component={Link} variant="contained"
                        to={'history'}>
                    <Typography variant={"h6"} sx={{m: 1}}>History</Typography>
                </Button>

                <Button sx={{cursor: 'pointer'}} component={Link} variant="contained"
                        to={'contact'}>
                    <Typography variant={"h6"} sx={{m: 1}}>Contact Us</Typography>
                </Button>

                <Button sx={{cursor: 'pointer'}} component={Link} variant="contained"
                        to={'firstRobotics'}>
                    <Typography variant={"h6"} sx={{m: 1}}>FIRST Robotics</Typography>
                </Button>


            </ButtonGroup>
      </AppBar>




            </div>


        }


















        {/*----------Small Screens----------*/}

        {!isScreenBig &&

            <div>

            <AppBar position="sticky" style={{display: "flex", alignItems: "left", width: "100"}}>

                <Button size={"small"} variant={"contained"} sx={{cursor: 'pointer', width: 10, m: 2}}
                        onClick={() => {
                            setDrawerState(!drawerState);
                            setCurrentPage(window.location.pathname);
                        }}>
                    <DensitySmallIcon/>
                </Button>


            </AppBar>

                <Drawer
                    open={drawerState}
                    onClick={() => setDrawerState(false)}
                    onClose={() => setDrawerState(false)}
                >

                    <List sx={{marginX: '20'}}>
                        <ListItem>
                            <ListItemButton sx={{cursor: 'pointer'}} component={Link} to={'/'}>
                                <Typography variant={"h4"} sx={{m: 1}}>Home</Typography>
                            </ListItemButton>
                        </ListItem>
                        <ListItem sx={{backgroundColor: currentPage === "/history" ? 'red' : ''}}>
                            <ListItemButton sx={{cursor: 'pointer'}} component={Link} to={'/history'}>
                                <Typography variant={"h5"} sx={{m: 1}}>History</Typography>
                            </ListItemButton>
                        </ListItem>
                        <ListItem sx={{backgroundColor: currentPage === "/contact" ? 'red' : ''}}>
                            <ListItemButton sx={{cursor: 'pointer'}} component={Link} to={'/contact'}>
                                <Typography variant={"h5"} sx={{m: 1}}>Contact Us</Typography>
                            </ListItemButton>
                        </ListItem>
                        <ListItem sx={{backgroundColor: currentPage === "/firstRobotics" ? 'red' : ''}}>
                            <ListItemButton sx={{cursor: 'pointer'}} component={Link} to={'/firstRobotics'}>
                                <Typography variant={"h5"} sx={{m: 1}}>FIRST Robotics</Typography>
                            </ListItemButton>
                        </ListItem>


                    </List>
                </Drawer>



            </div>

        }

        <Outlet/>

    </div>
  );
}

export default App;
