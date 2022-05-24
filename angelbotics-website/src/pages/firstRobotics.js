import {useEffect, useState} from "react";
import {Card, Paper, Typography} from "@mui/material";
import YouTube from "react-youtube";
import data from "./history.json";


export default function FirstRobotics() {


    // This code can be used for variable size on mobile vs desktop
    //
    //
    const [isScreenBig, setScreenBig] = useState(false);

    const data = require('./firstRobotics.json');


    useEffect(() => {

        setScreenBig(window.innerWidth > 1200);

    }, []);

    return (

        <div>


            {/*----------Big Screens----------*/}

            {isScreenBig &&

                <div>

                    <div style={{display: "flex", alignItems: "center", width: "100%", height: 300, marginLeft: '0'}}>

                        <Paper sx={{width: '100%', height: 300, alignItems: 'center', display: 'flex'}}>

                            <img src="/images/firstRobotics/firstLogoHorizontal.png" alt="First Robotics Logo"
                                 width="auto" height="250" style={{marginLeft: "20%"}}/>

                        </Paper>

                    </div>


                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        width: "95%",
                        height: 2200,
                        marginLeft: '2.5%',
                        marginTop: 50
                    }}>

                        <Paper sx={{width: "100%", height: 2200}}>

                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                width: "90%",
                                height: 600,
                                marginLeft: '5%',
                                marginTop: 0
                            }}>
                                <Card sx={{width: "50%", height: 600, mt: 20}}>

                                    <div style={{
                                        alignItems: "center",
                                        width: "90%",
                                        height: "auto",
                                        marginLeft: '5%',
                                        marginTop: 20
                                    }}>
                                        <Typography variant="h4">

                                            FIRST Robotics is an organization that maintains a series of unique robotics
                                            competitions. They are the creators of:


                                        </Typography>

                                        <Typography variant="h4" sx={{marginTop: 10}}>
                                            FIRST Robotics Competition (FRC)

                                        </Typography>
                                        <Typography variant="h4" sx={{marginTop: 10}}>
                                            FIRST Tech Challenge (FTC)

                                        </Typography>
                                        <Typography variant="h4" sx={{marginTop: 10}}>
                                            FIRST Lego League (FLL)

                                        </Typography>


                                    </div>
                                </Card>

                                <div style={{
                                    alignItems: "center",
                                    width: "50%",
                                    height: "auto",
                                    marginLeft: '5%',
                                    marginTop: 100
                                }}>

                                    <img src="/images/firstRobotics/frcLogo.jpg" alt="FRC Logo" width="90%"
                                         height="auto"/>
                                    <img src="/images/firstRobotics/ftcLogo.jpg" alt="FTC Logo" width="90%"
                                         height="auto"/>
                                    <img src="/images/firstRobotics/fllLogo.png" alt="FLL Logo" width="90%"
                                         height="auto"/>


                                </div>

                            </div>


                            <div style={{
                                alignItems: "center",
                                width: "90%",
                                height: 600,
                                marginLeft: '5%',
                                marginTop: 100
                            }}>

                                <Card sx={{width: "100%", height: "100%"}}>

                                    <div style={{
                                        display: 'flex',
                                        alignItems: "center",
                                        width: "90%",
                                        height: 600,
                                        marginLeft: '5%',
                                        marginTop: 100
                                    }}>

                                        <div style={{
                                            alignItems: "center",
                                            width: "70%",
                                            height: 600,
                                            marginLeft: '0%',
                                            marginTop: 100
                                        }}>

                                            <Typography variant="h3" sx={{marginBottom: 10}}>
                                                First Robotics Competition
                                            </Typography>

                                            <Typography variant="h5" sx={{marginRight: 5}}>
                                                FRC is the game that we participate in. Similar to the other two
                                                competitions, there is a new game concept each year, and they are wildly
                                                unique. The game gets released in early January, and we have 8-9 weeks
                                                to build a fully-functioning robot. The robots in FRC are generally big,
                                                heavy, and fast-moving. Robots are made from many different materials,
                                                like
                                                Aluminum and Polycarbonate, and parts are often custom-machined, 3D
                                                printed,
                                                or bought from a vendor.
                                            </Typography>

                                        </div>

                                        <div style={{marginBottom: 200}}>
                                            <YouTube

                                                videoId={data.FRC.gameVideo}
                                                opts={{
                                                    height: '550',
                                                    width: '800',
                                                    playerVars: {
                                                        // https://developers.google.com/youtube/player_parameters
                                                        autoplay: 0,
                                                        disablekb: 0,
                                                        loop: 0,
                                                        modestbranding: 1,

                                                    },
                                                }}/>
                                        </div>

                                    </div>


                                </Card>

                            </div>

                            <div style={{
                                display: 'flex',
                                alignItems: "center",
                                width: "90%",
                                height: 700,
                                marginLeft: '5%',
                                marginTop: 100
                            }}>

                                <Card sx={{width: "48%", height: "100%", marginRight: "4%"}}>

                                    <Typography variant="h3" sx={{marginBottom: 5, marginLeft: "5%"}}>
                                        First Tech Challenge
                                    </Typography>

                                    <Typography variant="h5" sx={{marginRight: 5, marginBottom: 2, marginLeft: "5%"}}>
                                        In FTC, robots are generally much smaller, and much more compact. The idea is
                                        similar to FRC where there is a different game every year. The robots are also
                                        constructed in a similar way to FRC robots, where things are custom-machined.
                                    </Typography>

                                    <div style={{marginLeft: '5%'}}>
                                        <YouTube

                                            videoId={data.FTC.gameVideo}
                                            opts={{
                                                height: '350',
                                                width: '90%',
                                                playerVars: {
                                                    // https://developers.google.com/youtube/player_parameters
                                                    autoplay: 0,
                                                    disablekb: 0,
                                                    loop: 0,
                                                    modestbranding: 1,

                                                },
                                            }}/>
                                    </div>


                                </Card>


                                <Card sx={{width: "48%", height: "100%"}}>

                                    <Typography variant="h3" sx={{marginBottom: 5, marginLeft: "5%"}}>
                                        First Lego League
                                    </Typography>

                                    <Typography variant="h5" sx={{marginRight: 5, marginBottom: 2, marginLeft: "5%"}}>
                                        In FLL, robots are made of Legos, and they have to complete specific challenges.
                                        There is only one robot on the field at a time, unlike FTC and FRC.
                                    </Typography>

                                    <div style={{marginLeft: '5%'}}>
                                        <YouTube

                                            videoId={data.FLL.gameVideo}
                                            opts={{
                                                height: '350',
                                                width: '90%',
                                                playerVars: {
                                                    // https://developers.google.com/youtube/player_parameters
                                                    autoplay: 0,
                                                    disablekb: 0,
                                                    loop: 0,
                                                    modestbranding: 1,

                                                },
                                            }}/>
                                    </div>


                                </Card>

                            </div>


                        </Paper>


                    </div>

                </div>

            }


            {/*----------Small Screens----------*/}

            {!isScreenBig &&

                <div style={{display: "flex", alignItems: "center", width: "100", height: 700}}>

                </div>

            }


        </div>
    );


}

