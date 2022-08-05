import {useEffect, useRef, useState} from "react";
import {Card, Paper, Typography} from "@mui/material";
import YouTube from "react-youtube";
import data from "./firstRobotics.json";

export default function FirstRobotics() {

    const [isScreenBig, setScreenBig] = useState(false);
    // This code can be used for variable size on mobile vs desktop

    const [forceRenderNum, setForceRenderNum] = useState({});

    const data = require('./firstRobotics.json');

    // const videosArray = ["Placeholder", data.FRC.gameVideo, data.FTC.gameVideo, data.FLL.gameVideo] // Skips the first index for some reason, so I added placeholder

    // const [YTRefs, setYTRefs] = useState(new Map()); // videosArray.reduce((a, v) => ({ ...a, [v]: createRef()}), {});

    const FRCVidRef = new useRef(null);
    const FTCVidRef = new useRef(null);
    const FLLVidRef = new useRef(null);
    const [hasYTLoaded, setYTLoaded] = useState({});
    const [YTLoadInterval, setYTLoadInterval] = useState({});
    const onPlayerReady = (id, ref) => {
        YTLoadInterval[id] = setInterval(delayedOnPlayerReady, 1000, id, ref);
    }
    const delayedOnPlayerReady = (id, ref) => {
        if(!hasYTLoaded[id] && ref.current != null) {
            let clientWidthBool = ref.current.clientWidth >= 5;
            hasYTLoaded[id] = clientWidthBool;
            clearInterval(YTLoadInterval[id]);
            setForceRenderNum(forceRenderNum + 1);
        }}



    useEffect(() => {

        setScreenBig(window.innerWidth > 1200);



        hasYTLoaded[data.FRC.gameVideo] = false;
        hasYTLoaded[data.FTC.gameVideo] = false;
        hasYTLoaded[data.FLL.gameVideo] = false;

        YTLoadInterval[data.FRC.gameVideo] = null;
        YTLoadInterval[data.FTC.gameVideo] = null;
        YTLoadInterval[data.FLL.gameVideo] = null;



    }, [hasYTLoaded, YTLoadInterval, data.FRC.gameVideo, data.FTC.gameVideo, data.FLL.gameVideo, forceRenderNum]);



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
                        height: 2300,
                        marginLeft: '2.5%',
                        marginTop: 50
                    }}>

                        <Paper sx={{width: "100%", height: 2300}}>

                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                width: "90%",
                                height: 600,
                                marginLeft: '5%',
                                marginTop: 0
                            }}>
                                <Card sx={{width: "50%", height: "auto", mt: 20}}>

                                    <div style={{
                                        alignItems: "center",
                                        width: "90%",
                                        height: "auto",
                                        marginLeft: '5%',
                                        marginTop: 20,
                                        marginBottom:20
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

                                    <img src="/images/firstRobotics/frcLogo.jpg" alt="FRC Logo" width="100%"
                                         height="auto"/>
                                    <img src="/images/firstRobotics/ftcLogo.jpg" alt="FTC Logo" width="100%"
                                         height="auto"/>
                                    <img src="/images/firstRobotics/fllLogo.png" alt="FLL Logo" width="100%"
                                         height="auto"/>


                                </div>

                            </div>


                            <div style={{
                                // alignItems: "center",
                                width: "90%",
                                height: "auto",
                                marginLeft: '5%',
                                marginTop: 100
                            }}>

                                <Card sx={{width: "100%", height: "100%"}}>

                                    <div style={{
                                        display: 'flex',
                                        // alignItems: "center",
                                        width: "90%",
                                        height: "auto",
                                        marginLeft: '5%',
                                        marginTop: 10
                                    }}>

                                        <div style={{
                                            // alignItems: "center",
                                            width: "70%",
                                            height: "auto",
                                            marginLeft: '0%',
                                            marginTop: 0
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

                                        <div style={{marginBottom: 20}}   ref={FRCVidRef} sx={{width:"auto", height:"auto"}}>
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

                                                    },}}
                                                onReady={onPlayerReady(data.FRC.gameVideo, FRCVidRef)}/>
                                        </div>

                                        {!hasYTLoaded[data.FRC.gameVideo] && <p>  <a rel="noreferrer noopener" target="_blank"
                                                                                    href={"https://www.youtube.com/watch?v=" + data.FRC.gameVideo}>
                                            YouTube Video</a> Has Not Loaded</p> }

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

                                    <div style={{marginLeft: '5%'}} ref={FTCVidRef} sx={{width:"auto", height:"auto"}}>
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
                                            }}
                                            onReady={onPlayerReady(data.FTC.gameVideo, FTCVidRef)}/>
                                    </div>


                                </Card>


                                <Card sx={{width: "48%", height: "100%"}}>

                                    <Typography variant="h3" sx={{marginBottom: 5, marginLeft: "5%"}}>
                                        First Lego League
                                    </Typography>

                                    <Typography variant="h5" sx={{marginRight: 5, marginBottom: 2, marginLeft: "5%"}}>
                                        In FLL, robots are made of Legos, and they have to complete specific challenges
                                        throughout the game field. Similar to FTC and FRC, there is a different game
                                        every year, but unlike them there is only a single robot on the field at a time.
                                    </Typography>

                                    <div style={{marginLeft: '5%'}} ref={FLLVidRef} sx={{width:"auto", height:"auto"}}>
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
                                            }}
                                            onReady={onPlayerReady(data.FLL.gameVideo, FLLVidRef)}/>
                                    </div>


                                </Card>

                            </div>


                        </Paper>


                    </div>

                </div>

            }


            {/*----------Small Screens----------*/}

            {!isScreenBig &&

                <div style={{alignItems: "center", width: "100", height: 'auto'}}>

                    <Paper sx={{width: "100%", height: 'auto'}}>

                        <div style={{
                            alignItems: "center",
                            width: "90%",
                            height: 'auto',
                            marginLeft: '5%',
                            marginTop: 50,
                            paddingTop:15,
                            paddingBottom:30
                        }}>
                            <Card sx={{width: "90%", height: 'auto', mt: 5, pt: 1, marginLeft: '5%'}}>

                                <div style={{
                                    alignItems: "center",
                                    width: "90%",
                                    height: "auto",
                                    marginLeft: '5%',
                                    marginTop: 20,
                                    marginBottom: 20
                                }}>
                                    <Typography variant="h6" sx={{mb: 5}}>

                                        FIRST Robotics is an organization that maintains a series of unique robotics
                                        competitions. They are the creators of:

                                    </Typography>


                                    <img src="/images/firstRobotics/frcLogo.jpg" alt="FRC Logo" width="90%"
                                         height="auto"/>
                                    <img src="/images/firstRobotics/ftcLogo.jpg" alt="FTC Logo" width="90%"
                                         height="auto"/>
                                    <img src="/images/firstRobotics/fllLogo.png" alt="FLL Logo" width="90%"
                                         height="auto"/>

                                </div>
                            </Card>


                            <Card sx={{width: "90%", height: "auto", mt: 5, ml: '5%'}}>

                                <div style={{
                                    alignItems: "center",
                                    width: "90%",
                                    height: 'auto',
                                    marginLeft: '5%',
                                    marginTop: 10
                                }}>

                                    <Typography variant="h5" sx={{marginBottom: 10}}>
                                        <a rel="noreferrer noopener" target="_blank"
                                           href={"https://www.youtube.com/watch?v=" + data.FRC.gameVideo}
                                           style={{color: '#90caf9'}}>
                                            First Robotics Competition
                                        </a>
                                    </Typography>

                                    <Typography variant="h6" sx={{marginRight: 5}}>
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


                            </Card>


                            <Card sx={{width: "90%", height: "auto", mt: 5, ml: '5%'}}>

                                <div style={{
                                    alignItems: "center",
                                    width: "90%",
                                    height: 'auto',
                                    marginLeft: '5%',
                                    marginTop: 10
                                }}>

                                    <Typography variant="h5" sx={{marginBottom: 10}}>
                                        <a rel="noreferrer noopener" target="_blank"
                                           href={"https://www.youtube.com/watch?v=" + data.FTC.gameVideo}
                                           style={{color: '#90caf9'}}>
                                            First Tech Challenge
                                        </a>
                                    </Typography>

                                    <Typography variant="h6" sx={{marginRight: 5}}>
                                        In FTC, robots are generally much smaller, and much more compact. The idea is
                                        similar to FRC where there is a different game every year. The robots are also
                                        constructed in a similar way to FRC robots, where things are custom-machined.
                                    </Typography>

                                </div>


                            </Card>


                            <Card sx={{width: "90%", height: "auto", mt: 5, ml: '5%'}}>

                                <div style={{
                                    alignItems: "center",
                                    width: "90%",
                                    height: 'auto',
                                    marginLeft: '5%',
                                    marginTop: 10
                                }}>

                                    <Typography variant="h5" sx={{marginBottom: 10}}>
                                        <a rel="noreferrer noopener" target="_blank"
                                           href={"https://www.youtube.com/watch?v=" + data.FLL.gameVideo}
                                           style={{color: '#90caf9'}}>
                                            First Lego League
                                        </a>
                                    </Typography>

                                    <Typography variant="h6" sx={{marginRight: 5}}>
                                        In FLL, robots are made of Legos, and they have to complete specific challenges
                                        throughout the game field. Similar to FTC and FRC, there is a different game
                                        every year, but unlike them there is only a single robot on the field at a time.
                                    </Typography>

                                </div>


                            </Card>


                        </div>

                    </Paper>
                </div>

            }


        </div>

    );


}

