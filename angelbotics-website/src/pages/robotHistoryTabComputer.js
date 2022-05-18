import {Box, Card, Typography} from "@mui/material";
import PropTypes from 'prop-types';
import YouTube from "react-youtube";
import {Canvas} from "@react-three/fiber";
import {Environment, Html, OrbitControls} from "@react-three/drei";
import {Suspense, useRef} from "react";
import * as THREE from "three";
import {useLoader} from "@react-three/fiber";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader";
import {DDSLoader} from "three-stdlib";
import data from "./history.json";


export default function RobotHistoryTabComputer(props) {

    function LoadingBar() {
        return <Html center>Loading...</Html>
    }

    const {children, value, index, ...other} = props;

    const data = require('./history.json');


    THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

    function CadModel(props) {

        // This reference gives us direct access to the THREE.Mesh object
        const ref = useRef()
        // Hold state for hovered and clicked events


            const materials = useLoader(MTLLoader, data.tabs[index].CadMaterialPath ?  data.tabs[index].CadMaterialPath :"");


        const obj = useLoader(OBJLoader, data.tabs[index].CadModelPath, (loader) => {

            if (data.tabs[index].CadMaterialPath) {
                materials.preload();
                loader.setMaterials(materials);
            }

        });


        obj.name = "Robot Cad Model";

        return <primitive
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
                    <Typography variant="h2" sx={{marginLeft:"30%"}}>

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
                          sx={{backgroundColor: '#ffd4d4', border: 1, borderWidth: 2, m: 5, height: 390, width: 400}}>

                        <Typography variant='h6' sx={{m: 5}} width="auto" height='390'>

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
                            <CadModel position={[0, 0, 0]}/>
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

                <img src={data.tabs[index].RobotImagePath} height="390" width="auto" alt={data.tabs[index].year + " robot picture"}/>

                {data.tabs[index].RevealVideo &&
                    <div style={{marginLeft:10}}>
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

        </div>
    );
}


RobotHistoryTabComputer.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};