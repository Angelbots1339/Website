import {useEffect, useState} from "react";
import {Box, Paper, Typography} from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";
import CuratorWidget from "./CuratorWidget";


export default function Home() {


    // This code can be used for variable size on mobile vs desktop
    //
    //
    const [isScreenBig, setScreenBig] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);

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

                                    <img src="/images/history/2022/JazzyJudi.JPG" alt="Robot Picture" width="90%"
                                         height="auto" style={{marginLeft:'2%'}}/>

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
                                        Angelbotics is a FIRST Robotics Competition team, and a Non-Profit organization
                                        affiliated with East High School Denver. Team 1339 Angelbotics was started
                                        around 2004, and has been competing ever since. We are based in Denver,
                                        Colorado,
                                        right in the center of the city.
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


                        {/*<Paper sx={{width: '90%', height: 500, marginLeft: '5%'}}>*/}

                        {/*    <Box display="flex" alignItems="center" justifyContent="center">*/}

                        {/*        <p>More Info Here</p>*/}

                        {/*    </Box>*/}


                        {/*</Paper>*/}


                    </div>


                </div>

            }


            {/*----------Small Screens----------*/}

            {!isScreenBig &&

                <div style={{alignItems: "center", width: "100", height: 700}}>


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
                                    Angelbotics is a FIRST Robotics Competition team, and a Non-Profit organization
                                    affiliated with East High School Denver. Team 1339 Angelbotics was started
                                    around 2004, and has been competing ever since. We are based in Denver,
                                    Colorado,
                                    right in the center of the city.
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

                                <img src="/images/history/2022/JazzyJudi.JPG" alt="Robot Picture" width="100%"
                                     height="auto"/>

                            </div>

                        </Box>

                    </Paper>


                </div>

            }


        </div>

    );
}
