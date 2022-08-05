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


    const reveal2022Ref = new useRef(null);
    const reveal2020Ref = new useRef(null);
    const reveal2019Ref = new useRef(null);
    const reveal2018Ref = new useRef(null);
    const reveal2017Ref = new useRef(null);
    const reveal2016Ref = new useRef(null);
    const reveal2015Ref = new useRef(null);
    const reveal2014Ref = new useRef(null);
    const reveal2013Ref = new useRef(null);

    const recap2022Ref = new useRef(null);
    const recap2020Ref = new useRef(null);
    const recap2019Ref = new useRef(null);
    const recap2018Ref = new useRef(null);
    const recap2017Ref = new useRef(null);
    const recap2016Ref = new useRef(null);
    const recap2015Ref = new useRef(null);
    const recap2014Ref = new useRef(null);
    const recap2013Ref = new useRef(null);

    const gameReveal2022Ref = new useRef(null);
    const gameReveal2020Ref = new useRef(null);
    const gameReveal2019Ref = new useRef(null);
    const gameReveal2018Ref = new useRef(null);
    const gameReveal2017Ref = new useRef(null);
    const gameReveal2016Ref = new useRef(null);
    const gameReveal2015Ref = new useRef(null);
    const gameReveal2014Ref = new useRef(null);
    const gameReveal2013Ref = new useRef(null);
    const gameReveal2012Ref = new useRef(null);
    const gameReveal2011Ref = new useRef(null);
    const gameReveal2010Ref = new useRef(null);
    const gameReveal2009Ref = new useRef(null);
    const gameReveal2008Ref = new useRef(null);
    const gameReveal2007Ref = new useRef(null);
    const gameReveal2004Ref = new useRef(null);


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


    // useEffect(() => {
    //
    //     hasYTLoaded[data.tabs[index].GameReveal] = false;
    //     hasYTLoaded[data.tabs[index].RevealVideo] = false;
    //     hasYTLoaded[data.tabs[index].RecapVideo] = false;
    //
    //     YTLoadInterval[data.tabs[index].GameReveal] = null;
    //     YTLoadInterval[data.tabs[index].RevealVideo] = null;
    //     YTLoadInterval[data.tabs[index].RecapVideo] = null;
    //
    //
    //
    // }, [hasYTLoaded, YTLoadInterval, data.tabs[index].GameReveal, data.tabs[index].RevealVideo, data.tabs[index].RecapVideo, forceRenderNum]);







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
                    <div style={{marginTop: '0%'}}>
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
                            }}/>


                    </div>}

            </div>


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
                    <img src={data.tabs[index].RobotImagePath} height="390" width="auto"
                         alt={data.tabs[index].year + " robot picture"}/>
                }

                {data.tabs[index].RevealVideo &&
                    <div style={{marginLeft: 10}}>
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
                            }}/>


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
                    <div style={{marginLeft: 10}}>
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
                            }}/>


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