import {Box, Card, Typography} from "@mui/material";
import PropTypes from 'prop-types';
import YouTube from "react-youtube";
import {Canvas} from "@react-three/fiber";
import {Environment, Html, OrbitControls} from "@react-three/drei";
import {Suspense, useEffect, useRef, useState} from "react";
import * as THREE from "three";
import {useLoader} from "@react-three/fiber";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader";
import {DDSLoader} from "three-stdlib";
import data from "./firstRobotics.json";


export default function RobotHistoryTabComputer(props) {

    function LoadingBar() {
        return <Html center>Loading...</Html>
    }

    const [forceRenderNum, setForceRenderNum] = useState({});

    const robotRevealRef = new useRef(null);
    const gameRevealRef = new useRef(null);
    const recapRef = new useRef(null);


    const [hasYTLoaded, setYTLoaded] = useState({});
    const [YTLoadInterval, setYTLoadInterval] = useState({});
    const onPlayerReady = (id, ref) => {

        if(!hasYTLoaded[id] && YTLoadInterval[id] == null) {
            YTLoadInterval[id] = setInterval(delayedOnPlayerReady, 1000, id, ref);
        }
    }
    const delayedOnPlayerReady = (id, ref) => {
        if(!hasYTLoaded[id] && ref.current != null) {
            let clientWidthBool = ref.current.clientWidth >= 1;
            hasYTLoaded[id] = clientWidthBool;
            clearInterval(YTLoadInterval[id]);
            setForceRenderNum(forceRenderNum + 1);
        }}


    const [useEffectHasRun, setUseEffectHasRun] = useState(false);

    useEffect(() => {



        if(!useEffectHasRun) {
            hasYTLoaded[data.tabs[index].GameReveal] = false;
            hasYTLoaded[data.tabs[index].RevealVideo] = false;
            hasYTLoaded[data.tabs[index].RecapVideo] = false;

            YTLoadInterval[data.tabs[index].GameReveal] = null;
            YTLoadInterval[data.tabs[index].RevealVideo] = null;
            YTLoadInterval[data.tabs[index].RecapVideo] = null;
            setUseEffectHasRun(true);
        }

    }, [hasYTLoaded, YTLoadInterval, forceRenderNum]);






    const {children, value, index, ...other} = props;

    const data = require('./history.json');


    THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

    function CadModel(props) {

        // This reference gives us direct access to the THREE.Mesh object
        const ref = useRef()
        // Hold state for hovered and clicked events


        const materials = useLoader(MTLLoader, data.tabs[index].CadMaterialPath ? data.tabs[index].CadMaterialPath : "");


        const obj = useLoader(OBJLoader, data.tabs[index].CadModelPath, (loader) => {

            if (data.tabs[index].CadMaterialPath) {
                materials.preload();
                loader.setMaterials(materials);
            }

        });


        obj.name = "Robot Cad Model";

        return <primitive
            {...props}
            object={obj}
            ref={ref}
        />;
    };

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}


            {data.tabs[index].GameName &&
                <Typography variant="h2" sx={{marginLeft: "30%"}}>

                    {data.tabs[index].GameName}

                </Typography>
            }


            <div style={{
                display: "flex",
                alignItems: "center",
                width: "95%",
                height: "auto",
                marginLeft: '2.5%',
                marginTop: 20
            }}>


                {data.tabs[index].GameDescription &&
                    <Card variant='outlined'
                          sx={{backgroundColor: '#ffd4d4', border: 1, borderWidth: 2, m: 5, height: 'auto', width: 400}}>

                        <Typography variant='h6' sx={{m: 5}} width="auto" height='auto'>

                            {data.tabs[index].GameDescription}


                        </Typography>

                    </Card>

                }
                {data.tabs[index].GameReveal &&
                    <div style={{marginTop: '0%'}} ref={gameRevealRef}>
                        <Typography variant='h4' sx={{m: 2, marginLeft:"30%"}} width="auto" height='auto'>
                            Game Reveal
                        </Typography>
                        <YouTube

                            videoId={data.tabs[index].GameReveal}
                            opts={{
                                height: '390',
                                width: '640',
                                playerVars: {
                                    // https://developers.google.com/youtube/player_parameters
                                    autoplay: 0,
                                    disablekb: 0,
                                    loop: 0,
                                    modestbranding: 1,

                                },
                            }}
                            onReady={onPlayerReady(data.tabs[index].GameReveal, gameRevealRef)}/>
                        {!hasYTLoaded[data.tabs[index].GameReveal] && <p>  <a rel="noreferrer noopener" target="_blank"
                                                                               href={"https://www.youtube.com/watch?v=" + data.tabs[index].GameReveal}>
                            YouTube Video</a> Has Not Loaded</p> }

                    </div>}

            </div>

            <div style={{
                display: "flex",
                alignItems: "center",
                width: "95%",
                height: "auto",
                marginLeft: '2.5%',
                marginTop: 20
            }}>


                {data.tabs[index].RecapVideo &&
                    <div style={{marginLeft: 10}} ref={recapRef}>
                        <Typography variant='h4' sx={{m: 2, marginLeft:"30%"}} width="auto" height='auto'>
                            Recap Video
                        </Typography>

                        <YouTube

                            videoId={data.tabs[index].RecapVideo}
                            opts={{
                                height: '390',
                                width: '640',
                                playerVars: {
                                    // https://developers.google.com/youtube/player_parameters
                                    autoplay: 0,
                                    disablekb: 0,
                                    loop: 0,
                                    modestbranding: 1,

                                },
                            }}
                            onReady={onPlayerReady(data.tabs[index].RecapVideo, recapRef)}/>

                        {!hasYTLoaded[data.tabs[index].RecapVideo] && <p>  <a rel="noreferrer noopener" target="_blank"
                                                                               href={"https://www.youtube.com/watch?v=" + data.tabs[index].RecapVideo}>
                            YouTube Video</a> Has Not Loaded</p> }

                    </div>}

                {data.tabs[index].yearSummary &&
                    <Card variant='outlined'
                          sx={{backgroundColor: '#ffd4d4', border: 1, borderWidth: 2, m: 5, height: 'auto', width: 400}}>

                        <Typography variant='h6' sx={{m: 5}} width="auto" height='auto'>

                            {data.tabs[index].yearSummary}


                        </Typography>

                    </Card>

                }




            </div>

            {data.tabs[index].RobotName &&
                <Typography variant="h2" sx={{marginLeft: "30%", marginBottom:10}}>

                    {data.tabs[index].RobotName}

                </Typography>
            }

            {data.tabs[index].CadModelPath &&
                <div sx={{margin: 10}}>
                    <Canvas frameloop="demand"
                            style={{width: "80%", marginLeft: "10%", height: 400, backgroundColor: (79, 79, 79)}}>
                        <Suspense fallback={<LoadingBar/>}>
                            <ambientLight/>
                            <pointLight position={[10, 10, 10]}/>
                            {/*<DefaultCube position={[3, 0, 0]}/>*/}
                            {/*<Monkey position={[0, 0, 0]}/>*/}
                            <CadModel position={[0, 0, 0]} rotation={[0, -45, 0]} scale={[.6, .6, .6]}/>
                            <OrbitControls/>
                            <Environment preset="sunset"/>
                        </Suspense>
                    </Canvas>

                </div>
            }




            <div style={{
                display: "flex",
                alignItems: "center",
                width: "95%",
                height: "auto",
                marginLeft: '2.5%',
                marginTop: 20
            }}>

                {data.tabs[index].RobotImagePath &&
                    <img src={data.tabs[index].RobotImagePath} height="auto" width="50%"
                         alt={data.tabs[index].year + " robot picture"}/>
                }

                {data.tabs[index].RevealVideo &&
                    <div style={{marginLeft: 10}} ref={robotRevealRef}>
                        <Typography variant='h4' sx={{m: 2, marginLeft:"30%"}} width="auto" height='auto'>
                            Robot Reveal
                        </Typography>
                        <YouTube

                            videoId={data.tabs[index].RevealVideo}
                            opts={{
                                height: '390',
                                width: '640',
                                playerVars: {
                                    // https://developers.google.com/youtube/player_parameters
                                    autoplay: 0,
                                    disablekb: 0,
                                    loop: 0,
                                    modestbranding: 1,

                                },
                            }}
                            onReady={onPlayerReady(data.tabs[index].RevealVideo, robotRevealRef)}/>


                        {!hasYTLoaded[data.tabs[index].RevealVideo] && <p>  <a rel="noreferrer noopener" target="_blank"
                                                                               href={"https://www.youtube.com/watch?v=" + data.tabs[index].RevealVideo}>
                            YouTube Video</a> Has Not Loaded</p> }

                    </div>}




            </div>



            {data.tabs[index].GithubCode &&
                <a rel="noreferrer noopener" target="_blank"
                   href={data.tabs[index].GithubCode}
                   style={{color: '#90caf9'}}>
                    <img src="/images/resources/GitHub_Logo.png" alt="Link To Github Repo" width="auto"
                         height="100"/>
                </a>
            }

        </div>
    );
}


RobotHistoryTabComputer.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};