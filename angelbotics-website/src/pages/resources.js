import {Card, Grid, IconButton, Paper, Typography} from "@mui/material";
import {ReactEmbeddedGoogleCalendar} from "react-embedded-google-calendar";
import {Outbound, Email} from '@mui/icons-material';

const resourcesJSON = require('./json/resources.json');


export default function Resources() {


    return (

        <div>


            {/*----------Big Screens----------*/}

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    width: "95%",
                    height: "auto",
                    marginLeft: '2.5%',
                    marginTop: 100
                }}>


                    <Paper sx={{width: '100%', height: "100%", boxShadow:5}}>


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
                                  sx={{width:"95%", height:"100%", ml:"2.5%", mt:5}}
                            >
                                <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                                <Card sx={{height: 650, width: "100%", boxShadow:2}}>

                                    <div style={{
                                        alignItems: "center",
                                        width: "90%",
                                        height: "auto",
                                        marginLeft: '5%',
                                        marginTop: 20
                                    }}>


                                        <div style={{
                                            display:"flex",
                                            width:"100%",
                                            height:"auto",
                                            justifyContent:"space-evenly",
                                            alignItems:"flex-start"
                                        }}>
                                            <Typography variant={'h4'}>
                                                Contact Us
                                            </Typography>
                                            <IconButton href={"mailto:" + resourcesJSON.contactUs.email} rel="noreferrer" target="_blank">
                                                <Email fontSize={"large"}/>
                                            </IconButton>
                                        </div>

                                        <Typography variant='h6'>
                                            {resourcesJSON.contactUs.text}
                                        </Typography>

                                        <Grid container direction="row"
                                              justifyContent="space-evenly"
                                              alignItems="center"
                                              spacing={1}
                                              sx={{width:"100%", height:"100%"}}
                                              key={"Contact Us"}
                                        >

                                        {resourcesJSON.contactUs.socialMedia.map((app) =>
                                            <Grid item xs={4} key={app.name}>
                                                <a rel="noreferrer noopener" target="_blank"
                                                   href={app.link}>
                                                    <img src={app.imagePath} alt={"Angelbotics " + app.name} width="100%"
                                                         height="auto" style={{marginLeft:"25%", borderRadius:0, marginTop:10}}/>
                                                </a>
                                            </Grid>
                                            )}

                                        </Grid>

                                    </div>
                                </Card>
                                </Grid>

                                {resourcesJSON.resourceCards.map((card) =>

                                        <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={card.name}>
                                            <Card sx={{height: 650, width: "100%", boxShadow:2}}>

                                                <div style={{
                                                    alignItems: "center",
                                                    width: "90%",
                                                    height: "auto",
                                                    marginLeft: '5%',
                                                    marginTop: 20
                                                }}>


                                                    <div style={{
                                                        display:"flex",
                                                        width:"100%",
                                                        height:"auto",
                                                        justifyContent:"space-evenly",
                                                        alignItems:"flex-start"
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
                                                             height="auto" style={{marginLeft:"25%", borderRadius:15, marginTop:10}}/>
                                                    </a>
                                                </div>
                                            </Card>
                                        </Grid>


                                    )}






                            </Grid>



                        </div>

                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            width: "95%",
                            height: 600,
                            marginLeft: '2.5%',
                            marginTop: 0
                        }}>
                        <Card sx={{height: 550, width: "100%", m: 3, boxShadow:2}}>

                            <div style={{
                                alignItems: "center",
                                width: "90%",
                                height: "auto",
                                marginLeft: '5%',
                                marginTop: 20
                            }}>


                        <ReactEmbeddedGoogleCalendar publicUrl ={resourcesJSON.googleCalendarPublicLink} height = '500px' width = "100%"/>

                            </div>
                        </Card>
                        </div>
                    </Paper>


                </div>

        </div>

    );
}
