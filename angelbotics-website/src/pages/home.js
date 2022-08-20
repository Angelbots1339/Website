import {useEffect, useState} from "react";
import {Box, Paper, Typography} from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';
import homeJSON from "./home.json";

export default function Home() {



    const [isScreenBig, setScreenBig] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);
    // This code can be used for variable size on mobile vs desktop


    const homeJSON = require('./home.json');

    useEffect(() => {

        setScreenBig(window.innerWidth > 1200);

        setScreenWidth(window.innerWidth);


    }, []);


    function slideshowHeight() {
        let width = screenWidth * 0.7;
        return width / 2;
    }

    function slideshowHeightMobile() {
        let width = screenWidth;
        return width / 1.777777;
    }


    return (

        <div>


            {/*----------Big Screens----------*/}

            {isScreenBig &&

                <div>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        height: "auto",
                        marginLeft: '0%',
                        marginTop: 0
                    }}>


                        <Paper sx={{width: '100%', height: slideshowHeight(), backgroundColor: "#ffffff"}}>

                            <Box display="flex" alignItems="center" justifyContent="center" sx={{marginTop: 0}}>

                                <SimpleImageSlider
                                    width="70%"
                                    height={slideshowHeight()}
                                    images={homeJSON.imageCarousel}
                                    showBullets={false}
                                    showNavs={true}
                                    loop={true}
                                    autoPlay={true}
                                    autoPlayDelay={6}
                                    bgColor={"#000000"}
                                />

                            </Box>


                        </Paper>


                    </div>


                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        width: "95%",
                        height: "auto",
                        marginLeft: '2.5%',
                        marginTop: 100
                    }}>


                        <Paper sx={{width: '55%', height: 600}}>

                            <Box display="flex" alignItems="center" justifyContent="center">
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    width: "90%",
                                    height: "auto",
                                    marginLeft: '5%',
                                    marginTop: 10
                                }}>

                                    <img src={homeJSON.info.robotImagePath} alt="Robot Picture" width="95%"
                                         height="auto" style={{marginX: "auto"}}/>

                                </div>
                            </Box>

                        </Paper>


                        <Paper sx={{width: '40%', height: 600, marginLeft: '5%'}}>

                            <Box display="flex" alignItems="center" justifyContent="center">

                                <div style={{
                                    alignItems: "center",
                                    width: "90%",
                                    height: "auto",
                                    marginLeft: '5%',
                                    marginRight: '5%',
                                    marginTop: 50
                                }}>

                                    <Typography variant="h4">
                                        {homeJSON.info.teamDescription}
                                    </Typography>
                                </div>
                            </Box>
                        </Paper>


                    </div>

                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        width: "95%",
                        height: "auto",
                        marginLeft: '2.5%',
                        marginTop: 100
                    }}>


                        <Paper sx={{width: '100%', height: 500, marginLeft: '0%'}}>

                            <div style={{
                                alignItems: "center",
                                width: "90%",
                                height: "auto",
                                marginLeft: '5%',
                                marginTop: 25
                            }}>
                            <ReactEmbeddedGoogleCalendar publicUrl ={homeJSON.info.googleCalendarPublicLink} height = '450px' width = "100%"/>
                            </div>

                        </Paper>


                    </div>


                </div>

            }


            {/*----------Small Screens----------*/}

            {!isScreenBig &&

                <div style={{alignItems: "center", width: "100", height: "auto"}}>


                    <Paper sx={{width: '100%', height: slideshowHeightMobile(), backgroundColor: "#ffffff"}}>

                        <Box display="flex" alignItems="center" justifyContent="center" sx={{marginTop: 0}}>

                            <SimpleImageSlider
                                width="100%"
                                height={slideshowHeightMobile()}
                                images={homeJSON.imageCarousel}
                                showBullets={false}
                                showNavs={true}
                                loop={true}
                                autoPlay={true}
                                autoPlayDelay={6}
                                bgColor={"#000000"}
                            />

                        </Box>


                    </Paper>

                    <Paper sx={{width: '100%', height: 'auto', marginTop: 3}}>

                        <Box display="flex" alignItems="center" justifyContent="center">

                            <div style={{
                                alignItems: "center",
                                width: "90%",
                                height: "auto",
                                marginLeft: '5%',
                                marginRight: '5%',
                                marginTop: 15,
                                marginBottom: 15
                            }}>

                                <Typography variant="h6">
                                    {homeJSON.info.teamDescription}
                                </Typography>

                            </div>

                        </Box>

                    </Paper>


                    <Paper sx={{width: '100%', height: 'auto', marginTop: 3}}>

                        <Box display="flex" alignItems="center" justifyContent="center">

                            <div style={{
                                alignItems: "center",
                                width: "90%",
                                height: "auto",
                                marginLeft: '5%',
                                marginRight: '5%',
                                marginTop: 15,
                                marginBottom: 15
                            }}>

                                <img src={homeJSON.info.robotImagePath} alt="Robot Picture" width="100%"
                                     height="auto"/>

                            </div>

                        </Box>

                    </Paper>

                    <Paper sx={{width: '100%', height: 500, marginLeft: '0%'}}>

                        <div style={{
                            alignItems: "center",
                            width: "90%",
                            height: "auto",
                            marginLeft: '5%',
                            marginTop: 25
                        }}>
                            <ReactEmbeddedGoogleCalendar publicUrl ={homeJSON.info.googleCalendarPublicLink} height = '450px' width = "100%"/>
                        </div>

                    </Paper>

                </div>

            }


        </div>

    );
}
