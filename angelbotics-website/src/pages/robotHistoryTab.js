import {Box, Card, CircularProgress, Grid, Typography, useMediaQuery} from "@mui/material";
import PropTypes from 'prop-types';
import {Canvas} from "@react-three/fiber";
import { Html, OrbitControls} from "@react-three/drei";
import {Suspense, useEffect, useRef, useState} from "react";
import * as THREE from "three";
import {useLoader} from "@react-three/fiber";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader";
import {DDSLoader} from "three-stdlib";
import {mainTheme} from "../theme";
import {motion} from "framer-motion"


export default function RobotHistoryTab(props) {

    const bigScreen = useMediaQuery(mainTheme.breakpoints.up('sm'));

    function LoadingBar() {
        return <Html center>
            <CircularProgress color={"primary"}/>
        </Html>
    }

    const [isScreenBig, setScreenBig] = useState(false);

    // const [forceRenderNum, setForceRenderNum] = useState({});
    //
    // const robotRevealRef = new useRef(null);
    // const gameRevealRef = new useRef(null);
    // const recapRef = new useRef(null);


    // const [hasYTLoaded, setYTLoaded] = useState({});
    // const [YTLoadInterval, setYTLoadInterval] = useState({});
    // const onPlayerReady = (id, ref) => {
    //
    //     // if (!hasYTLoaded[id] && YTLoadInterval[id] == null) {
    //     //
    //     //     let newArr = YTLoadInterval;
    //     //     newArr[id] = setInterval(delayedOnPlayerReady, 1000, id, ref);
    //     //     setYTLoadInterval(newArr);
    //     // }
    // }
    // const delayedOnPlayerReady = (id, ref) => {
    //     if (!hasYTLoaded[id] && ref.current != null) {
    //         let clientWidthBool = ref.current.clientWidth >= 1;
    //         let newArr = hasYTLoaded;
    //         newArr[id] = clientWidthBool;
    //         setYTLoaded(newArr);
    //         clearInterval(YTLoadInterval[id]);
    //         setForceRenderNum(forceRenderNum + 1);
    //     }
    // }


    useEffect(() => {
            setScreenBig(window.innerWidth > 1200);
    })
    // const [useEffectHasRun, setUseEffectHasRun] = useState(false);
    //
    // useEffect(() => {
    //
    //     setScreenBig(window.innerWidth > 1200);
    //
    //     if (!useEffectHasRun) {
    //         hasYTLoaded[data.tabs[index].GameReveal] = false;
    //         hasYTLoaded[data.tabs[index].RevealVideo] = false;
    //         hasYTLoaded[data.tabs[index].RecapVideo] = false;
    //
    //         YTLoadInterval[data.tabs[index].GameReveal] = null;
    //         YTLoadInterval[data.tabs[index].RevealVideo] = null;
    //         YTLoadInterval[data.tabs[index].RecapVideo] = null;
    //         setUseEffectHasRun(true);
    //     }
    //
    // }, [hasYTLoaded, YTLoadInterval, forceRenderNum]);

    const {children, value, index, ...other} = props;

    const data = require('./json/history.json');


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
    }


    function HistoryCard(props) {
        return (
            <Card {...props}
                  sx={{backgroundColor: '#ffc2c2', mt: 9, height: '100%', width: "100%", boxShadow: 10, borderRadius: 5}}>

            </Card>
        )
    }


    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 0}}>
                    <Typography>{children}</Typography>
                </Box>
            )}

            <Grid container spacing={2}
                  sx={{width: "95%", m: "2.5%", alignItems: "flex-start", justifyContent: "flex-start"}}>


                {data.tabs[index].GameName &&
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <motion.div
                            style={{height: "100%", width: "100%"}}
                            initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                            whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                            viewport={{margin: "100px", once: !bigScreen}}
                        >
                            <Typography variant={"h3"} sx={{marginLeft: isScreenBig ? "20%" : "10%"}}>

                                {data.tabs[index].GameName}

                            </Typography>
                        </motion.div>
                    </Grid>
                }

                {data.tabs[index].GameDescription &&
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <motion.div
                            style={{height: "100%", width: "100%"}}
                            initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                            whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                            viewport={{margin: "100px", once: !bigScreen}}
                        >
                            <HistoryCard>
                                <Typography variant='h6' sx={{m: 5}} width="auto" height='auto'>
                                    {data.tabs[index].GameDescription}
                                </Typography>
                            </HistoryCard>
                        </motion.div>
                    </Grid>
                }
                {data.tabs[index].GameReveal &&
                    <Grid item xs={12} sm={12} md={12} lg={8} xl={8} sx={{}}>
                        <motion.div
                            style={{height: "100%", width: "100%"}}
                            initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                            whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                            viewport={{margin: "100px", once: !bigScreen}}
                        >
                            <div style={{marginTop: '0%', justifyContent: "center"}}>
                                <Typography variant='h4' sx={{m: 2, marginLeft: isScreenBig ? "30%" : "10%"}}
                                            width="auto"
                                            height='auto'>
                                    Game Reveal
                                </Typography>
                                <iframe src={'https://www.youtube.com/embed/' + data.tabs[index].GameReveal}
                                        allow='autoplay; encrypted-media'
                                        allowFullScreen
                                        loading="lazy"
                                        style={{
                                            width: "100%",
                                            height: bigScreen ? 450 : 200,
                                            border: 0,
                                            borderRadius: 20,
                                        }}
                                />

                            </div>
                        </motion.div>
                    </Grid>
                }


                {data.tabs[index].RecapVideo &&
                    <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                        <motion.div
                            style={{height: "100%", width: "100%"}}
                            initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                            whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                            viewport={{margin: "100px", once: !bigScreen}}
                        >
                            <div style={{marginLeft: 10}}>
                                <Typography variant='h4' sx={{m: 2, marginLeft: isScreenBig ? "30%" : "10%"}}
                                            width="auto"
                                            height='auto'>
                                    Recap Video
                                </Typography>

                                <iframe src={'https://www.youtube.com/embed/' + data.tabs[index].RecapVideo}
                                        allow='autoplay; encrypted-media'
                                        allowFullScreen
                                        loading="lazy"
                                        style={{
                                            width: "100%",
                                            height: bigScreen ? 450 : 200,
                                            border: 0,
                                            borderRadius: 20
                                        }}
                                />

                            </div>
                        </motion.div>
                    </Grid>
                }

                {data.tabs[index].yearSummary &&
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <motion.div
                            style={{height: "100%", width: "100%"}}
                            initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                            whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                            viewport={{margin: "100px", once: !bigScreen}}
                        >
                            <HistoryCard>


                                <Typography variant='h6' sx={{m: 5}} width="auto" height='auto'>

                                    {data.tabs[index].yearSummary}

                                </Typography>
                            </HistoryCard>
                        </motion.div>
                    </Grid>
                }

                {data.tabs[index].RobotName &&
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <motion.div
                            style={{height: "100%", width: "100%"}}
                            initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                            whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                            viewport={{margin: "100px", once: !bigScreen}}
                        >
                            <Typography variant="h4" sx={{marginLeft: isScreenBig ? "30%" : "10%"}}>

                                {data.tabs[index].RobotName}

                            </Typography>
                        </motion.div>
                    </Grid>
                }

                {data.tabs[index].CadModelPath &&
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <div>
                                <Canvas frameloop="demand"
                                        style={{
                                            width: "80%",
                                            marginLeft: "10%",
                                            height: 400,
                                            backgroundColor: (79, 79, 79)
                                        }}>
                                    <Suspense fallback={<LoadingBar/>}>
                                        <ambientLight/>
                                        <pointLight position={[10, 10, 10]}/>
                                        <CadModel position={[0, 0, 0]} rotation={[0, -45, 0]} scale={[.6, .6, .6]}/>
                                        <OrbitControls/>
                                    </Suspense>
                                </Canvas>
                            </div>
                    </Grid>
                }

                {data.tabs[index].RobotImagePath &&
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <motion.div
                            style={{height: "100%", width: "100%"}}
                            initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                            whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                            viewport={{margin: "100px", once: !bigScreen}}
                        >
                            <img src={data.tabs[index].RobotImagePath} height="auto" width="100%"
                                 alt={data.tabs[index].year + " robot picture"} style={{marginTop: 73.25, borderRadius:20, boxShadow: 10}}/>
                        </motion.div>
                    </Grid>
                }

                {data.tabs[index].RevealVideo &&
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <motion.div
                            style={{height: "100%", width: "100%"}}
                            initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                            whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                            viewport={{margin: "100px", once: !bigScreen}}
                        >
                            <div style={{marginLeft: 0}}>
                                <Typography variant='h4' sx={{m: 2, marginLeft: "30%"}} width="auto" height='auto'>
                                    Robot Reveal
                                </Typography>

                                <iframe src={'https://www.youtube.com/embed/' + data.tabs[index].RevealVideo}
                                        allow='autoplay; encrypted-media'
                                        allowFullScreen
                                        loading="lazy"
                                        style={{
                                            width: "100%",
                                            height: bigScreen ? 400 : 200,
                                            border: 0,
                                            borderRadius: 20

                                        }}
                                />
                            </div>
                        </motion.div>
                    </Grid>
                }


                {data.tabs[index].GithubCode &&
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <motion.div
                            style={{height: "100%", width: "100%"}}
                            initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                            whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                            viewport={{margin: "100px", once: !bigScreen}}
                        >
                            <a rel="noreferrer noopener" target="_blank"
                               href={data.tabs[index].GithubCode}
                               style={{color: '#90caf9'}}>
                                <img src="/images/resources/GitHub_Logo.png" alt="Link To Github Repo" width="auto"
                                     height="100"/>
                            </a>
                            <div style={{height: "20px"}}>
                            </div>
                        </motion.div>
                    </Grid>
                }

                {!bigScreen &&
                    <motion.div
                        style={{height: "100%", width: "100%", marginBottom: 50}}
                        initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                        whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                        viewport={{margin: "100px", once: !bigScreen}}
                    >
                    <HistoryCard>
                        <Typography variant='h5' fontSize='1' width="auto" height='390' sx={{m: 2}}>
                            {data.tabs[index].GameReveal && <a rel="noreferrer noopener" target="_blank"
                                                               href={"https://www.youtube.com/watch?v=" + data.tabs[index].GameReveal}
                            >{data.tabs[index].year + " Game Animation \n"}</a>}
                        </Typography>
                        <Typography variant='h5' fontSize='1' width="auto" height='390' sx={{m: 2}}>
                            {data.tabs[index].RevealVideo && <a rel="noreferrer noopener" target="_blank"
                                                                href={"https://www.youtube.com/watch?v=" + data.tabs[index].RevealVideo}
                            >{data.tabs[index].year + " Robot Reveal \n"}</a>}
                        </Typography>
                        <Typography variant='h5' fontSize='1' width="auto" height='390' sx={{m: 2}}>
                            {data.tabs[index].RecapVideo && <a rel="noreferrer noopener" target="_blank"
                                                               href={"https://www.youtube.com/watch?v=" + data.tabs[index].RecapVideo}
                            >{data.tabs[index].year + " Season Recap \n"}</a>}
                        </Typography>
                    </HistoryCard>
                    </motion.div>
                }
            </Grid>

        </div>
    );
}


RobotHistoryTab.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};