import {Card, Grid, IconButton, Paper, Typography, useMediaQuery, Link} from "@mui/material";
import {ReactEmbeddedGoogleCalendar} from "react-embedded-google-calendar";
import {Outbound, Email, Assignment, CheckBox, CheckBoxOutlineBlank} from '@mui/icons-material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { SvgIcon } from '@mui/material';
import {motion} from "framer-motion"
import {mainTheme} from "../theme";
// import { Link } from "react-router-dom";

const resourcesJSON = require('./json/resources.json');


export default function Resources() {

    const bigScreen = useMediaQuery(mainTheme.breakpoints.up('sm'));
    // function AngelboticsLogo(props) {
    //     return (
    //         <SvgIcon>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="currentColor"
    //           viewBox="0 0 240 240"
    //           strokeWidth={1.5}
    //           stroke="currentColor"
    //           fontSize="large"
    //         >
                
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"              
    //               d="M182.2 154.7H79.1l10.6-19.2 62.2-.2L100.5 45h20z"
    //             />
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"                   
    //               d="M129 132.4 97.9 81.1l-54.6 94.8-9.7-19L97.9 46.7l50.2 85.7z"
    //             />
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"                   
    //               d="M74.4 157.6h108.8l-9.7 19.8H45.6l52.3-91.2 8.5 13.7z"
    //             />
    //         </svg>
    //       </SvgIcon>
    // )
    
    // } 
    //Figure this out later
    // https://react-svgr.com/playground/ is incredibly helpful for this
    // https://mui.com/material-ui/icons/ is the docs

    return (

        <div>


            {/*----------Big Screens----------*/}

            <div style={{
                display: "flex", alignItems: "center", width: "95%", height: "auto", marginLeft: '2.5%', marginTop: 100
            }}>


                <Paper sx={{width: '100%', height: "100%", boxShadow: 5, borderRadius: 5}}>


                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        width: "95%",
                        height: "100%",
                        marginLeft: '2.5%',
                        marginTop: 0
                    }}>

                        <Grid container
                              direction="row"
                              justifyContent="space-evenly"
                              alignItems="center"
                              spacing={2}
                              sx={{width: "95%", height: "100%", ml: "2.5%", mt: 5}}
                        >
                            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                                <motion.div
                                    style={{height: "100%"}}
                                    initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                                    whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                                    viewport={{margin: "100px", once: !bigScreen}}
                                >
                                    <Card sx={{height: 650, width: "100%", boxShadow: 2, borderRadius: 5}}>

                                        <div style={{
                                            alignItems: "center",
                                            width: "90%",
                                            height: "auto",
                                            marginLeft: '5%',
                                            marginTop: 20
                                        }}>


                                            <div style={{
                                                display: "flex",
                                                width: "100%",
                                                height: "auto",
                                                justifyContent: "space-evenly",
                                                alignItems: "flex-start"
                                            }}>
                                                <Typography variant={'h4'}>
                                                    Support Us
                                                </Typography>
                                                <IconButton href={resourcesJSON.supportUs.moreResourcesLink}
                                                            rel="noreferrer" target="_blank">
                                                    <Outbound fontSize={"large"}/>
                                                </IconButton>
                                            </div>

                                            <Typography variant='h6'>
                                                {resourcesJSON.supportUs.text}
                                                <Link href={"mailto:" + resourcesJSON.supportUs.email} rel="noreferrer" target="_blank" variant="h6">
                                                    {resourcesJSON.supportUs.email}
                                                </Link>
                                            </Typography>

                                            <Grid container direction="row"
                                                  justifyContent="space-evenly"
                                                  alignItems="center"
                                                  spacing={1}
                                                  sx={{width: "100%", height: "100%"}}
                                                  key={"Support Us"} //This used to be contact us
                                            >

                                                {resourcesJSON.supportUs.socialMedia.map((app) => <Grid item xs={4}
                                                                                                        key={app.name}>
                                                    <a rel="noreferrer noopener" target="_blank"
                                                       href={app.link}>
                                                        <img src={app.imagePath} alt={"Angelbotics " + app.name}
                                                             width="100%"
                                                             height="auto" style={{
                                                            marginLeft: "5%", marginRight: "5%", borderRadius: 0, marginTop: 10
                                                        }}/>
                                                    </a>
                                                </Grid>)}

                                            </Grid>

                                        </div>
                                    </Card>
                                </motion.div>
                            </Grid>

                            {resourcesJSON.resourceCards.map((card) =>

                                <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={card.name}>
                                    <motion.div
                                        style={{height: "100%"}}
                                        initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                                        whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                                        viewport={{margin: "100px", once: !bigScreen}}
                                    >
                                        <Card sx={{height: 650, width: "100%", boxShadow: 2, borderRadius: 5}}>

                                            <div style={{
                                                alignItems: "center",
                                                width: "90%",
                                                height: "auto",
                                                marginLeft: '5%',
                                                marginTop: 20
                                            }}>


                                                <div style={{
                                                    display: "flex",
                                                    width: "100%",
                                                    height: "auto",
                                                    justifyContent: "space-evenly",
                                                    alignItems: "flex-start"
                                                }}>
                                                    <Typography variant={'h4'}>
                                                        {card.name}
                                                    </Typography>
                                                    <IconButton href={card.url} rel="noreferrer" target="_blank">
                                                        <Outbound fontSize={"large"}/>
                                                    </IconButton>
                                                </div>

                                                <Typography variant='h6'>
                                                    {card.description}
                                                </Typography>

                                                <a rel="noreferrer noopener" target="_blank"
                                                   href={card.url}>
                                                    <img src={card.imagePath} alt={card.name + " Logo"} width="50%"
                                                         height="auto"
                                                         style={{marginLeft: "25%", borderRadius: 15, marginTop: 10}}/>
                                                </a>
                                            </div>
                                        </Card>
                                    </motion.div>
                                </Grid>)}

                        </Grid>

                    </div>

                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        width: "90%",
                        height: 600,
                        marginLeft: '2.5%',
                        marginTop: 0
                    }}>
                        <motion.div
                            style={{height: "100%", width: "100%"}}
                            initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                            whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                            viewport={{margin: "100px", once: !bigScreen}}
                        >
                            <Card sx={{height: 550, width: "100%", m: 3, boxShadow: 2, borderRadius: 5}}>

                                <div style={{
                                    alignItems: "center", width: "90%", height: "auto", marginLeft: '5%', marginTop: 20
                                }}>

                                    <ReactEmbeddedGoogleCalendar publicUrl={resourcesJSON.googleCalendarPublicLink}
                                                                 height='500px' width="100%"/>

                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </Paper>


            </div>

        </div>

    );
}
