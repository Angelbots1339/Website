import {useEffect, useRef, useState} from "react";
import {Card, Grid, Paper, Typography} from "@mui/material";
import YouTube from "react-youtube";

export default function FirstRobotics() {
    // This code can be used for variable size on mobile vs desktop

    const [forceRenderNum, setForceRenderNum] = useState({});

    const data = require('./json/firstRobotics.json');

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
        if (!hasYTLoaded[id] && ref.current != null) {
            let clientWidthBool = ref.current.clientWidth >= 5;
            hasYTLoaded[id] = clientWidthBool;
            clearInterval(YTLoadInterval[id]);
            setForceRenderNum(forceRenderNum + 1);
        }
    }

    const [isScreenBig, setScreenBig] = useState(false);

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

            <div style={{
                display: "flex",
                alignItems: "center",
                width: "95%",
                height: "auto",
                marginLeft: '2.5%',
                marginTop: 50
            }}>

                <Paper sx={{width: "100%", height: "auto", boxShadow: 5, justifyContent: "center"}}>

                    <Grid container spacing={2} sx={{width: "98%", height: "auto", ml: "0%", mr: "0%", mt: 1, mb: 2}}>

                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Card sx={{
                                width: "100%",
                                height: "auto",
                                justifyContent: "center",
                                boxShadow: 5
                            }}>
                                <Grid container spacing={2} sx={{m: 2}}>
                                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                        <a rel="noreferrer noopener" target="_blank"
                                           href={data.firstWebsite}>
                                            <img src="/images/firstRobotics/firstLogoHorizontal.png"
                                                 alt="First Robotics Logo"
                                                 width="90%" height="auto"
                                                 style={{padding: 10, alignSelf: "center"}}/>
                                        </a>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                                        <div
                                            style={{
                                                // alignItems: "center",
                                                width: "95%",
                                                height: "auto",
                                                marginLeft: '2.5%',
                                                marginTop: 0
                                            }}>
                                            <Typography variant="h5" sx={{mr: 5}}>
                                                {data.firstDescription}
                                            </Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Card sx={{
                                width: "100%",
                                height: "auto",
                                justifyContent: "center",
                                boxShadow: 5
                            }}>

                                <Grid container spacing={2}>


                                    <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>

                                        <a rel="noreferrer noopener" target="_blank"
                                           href={data.FRC.website}>
                                            <img src={data.FRC.logo} alt="FRC Logo" width="80%"
                                                 height="auto" style={{marginBottom: 10, marginRight: 5}}/>
                                        </a>

                                        <Typography variant="h6" sx={{mr: 3, ml: 5}}>
                                            {data.FRC.generalDescription}
                                        </Typography>

                                    </Grid>


                                    <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>

                                        <div style={{marginBottom: 20, marginTop: 20, marginLeft: "2.5%"}}
                                             ref={FRCVidRef}>
                                            <YouTube
                                                videoId={data.FRC.gameVideo}
                                                opts={{
                                                    height: isScreenBig ? '450' : '200',
                                                    width: '95%',
                                                    playerVars: {
                                                        // https://developers.google.com/youtube/player_parameters
                                                        autoplay: 0,
                                                        disablekb: 0,
                                                        loop: 0,
                                                        modestbranding: 1,

                                                    },
                                                }}
                                                onReady={onPlayerReady(data.FRC.gameVideo, FRCVidRef)}/>
                                        </div>

                                        {!hasYTLoaded[data.FRC.gameVideo] &&
                                            <p> If the <a rel="noreferrer noopener" target="_blank"
                                                          href={"https://www.youtube.com/watch?v=" + data.FRC.gameVideo}>
                                                YouTube Video</a> Has Not Loaded</p>}
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                            <Card sx={{width: "100%", height: "100%", boxShadow: 5}}>

                                <a rel="noreferrer noopener" target="_blank"
                                   href={data.FTC.website}>
                                    <img src={data.FTC.logo} alt="FTC Logo" width="60%"
                                         height="auto" style={{margin: 20}}/>
                                </a>

                                <Typography variant="h6"
                                            sx={{marginRight: 5, marginBottom: 2, marginLeft: "5%"}}>
                                    {data.FTC.generalDescription}
                                </Typography>

                                <div style={{marginLeft: '5%'}} ref={FTCVidRef}>
                                    <YouTube

                                        videoId={data.FTC.gameVideo}
                                        opts={{
                                            height: isScreenBig ? '350' : '200',
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

                                    {!hasYTLoaded[data.FTC.gameVideo] &&
                                        <p> If the <a rel="noreferrer noopener" target="_blank"
                                                      href={"https://www.youtube.com/watch?v=" + data.FTC.gameVideo}>
                                            YouTube Video</a> Has Not Loaded</p>}
                                </div>


                            </Card>
                        </Grid>


                        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                            <Card sx={{width: "100%", height: "100%", boxShadow: 5}}>

                                <a rel="noreferrer noopener" target="_blank"
                                   href={data.FLL.website}>
                                    <img src={data.FLL.logo} alt="FLL Logo" width="60%"
                                         height="auto" style={{margin: 20}}/>
                                </a>

                                <Typography variant="h6"
                                            sx={{marginRight: 5, marginBottom: 2, marginLeft: "5%"}}>
                                    {data.FLL.generalDescription}
                                </Typography>

                                <div style={{marginLeft: '5%'}} ref={FLLVidRef}>
                                    <YouTube

                                        videoId={data.FLL.gameVideo}
                                        opts={{
                                            height: isScreenBig ? '350' : '200',
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

                                    {!hasYTLoaded[data.FLL.gameVideo] &&
                                        <p> If the <a rel="noreferrer noopener" target="_blank"
                                                      href={"https://www.youtube.com/watch?v=" + data.FLL.gameVideo}>
                                            YouTube Video</a> Has Not Loaded</p>}

                                </div>
                            </Card>
                        </Grid>

                        {!isScreenBig && <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                            <Card sx={{width: "100%", height: "100%", boxShadow: 5}}>                                <Typography variant='h5' fontSize='1' width="auto" height='390' sx={{m: 2}}>
                                    {data.FRC.gameVideo && <a rel="noreferrer noopener" target="_blank"
                                                                       href={"https://www.youtube.com/watch?v=" + data.FRC.gameVideo}
                                    >{"FRC Game Video"}</a>}
                                </Typography>
                                <Typography variant='h5' fontSize='1' width="auto" height='390' sx={{m: 2}}>
                                    {data.FTC.gameVideo && <a rel="noreferrer noopener" target="_blank"
                                                                        href={"https://www.youtube.com/watch?v=" + data.FTC.gameVideo}
                                    >{"FTC Game Video"}</a>}
                                </Typography>
                                <Typography variant='h5' fontSize='1' width="auto" height='390' sx={{m: 2}}>
                                    {data.FLL.gameVideo && <a rel="noreferrer noopener" target="_blank"
                                                                       href={"https://www.youtube.com/watch?v=" + data.FLL.gameVideo}
                                    >{"FLL Game Video"}</a>}
                                </Typography>
                            </Card>
                        </Grid>}
                    </Grid>
                </Paper>
            </div>
        </div>
    );
}

