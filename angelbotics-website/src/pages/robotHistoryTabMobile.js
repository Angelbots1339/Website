import {Box, Card, Typography} from "@mui/material";
import PropTypes from 'prop-types';
import {Canvas, useLoader} from "@react-three/fiber";
import {Suspense, useRef} from "react";
import {Environment, Html, OrbitControls} from "@react-three/drei";
import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";


export default function RobotHistoryTabMobile(props) {

    function LoadingBar() {
        return <Html center>Loading...</Html>
    }

    const {children, value, index, ...other} = props;

    const data = require('./json/history.json');


    function CadModel() {

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
            object={obj}
            ref={ref}
        />;
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
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}


            {data.tabs[index].GameName &&
                <Typography variant="h4" sx={{marginLeft: "10%"}}>

                    {data.tabs[index].GameName}

                </Typography>
            }

            <div style={{
                alignItems: "center",
                width: "95%",
                height: "auto",
                marginLeft: '2.5%',
                marginTop: 20
            }}>

                {data.tabs[index].GameDescription && <Card variant='outlined'
                      sx={{backgroundColor: '#ffe9e9', border: 1, borderWidth: 2, m: 1, height: "auto", width: "90%"}}>

                    <div>
                        <Typography variant='p' fontSize='1' width="90%" height='390' margin="10" padding="auto">

                            {data.tabs[index].GameDescription}


                        </Typography>
                    </div>
                </Card>}

            </div>

            <div style={{
                alignItems: "center",
                width: "95%",
                height: "auto",
                marginLeft: '2.5%',
                marginTop: 20
            }}>

                <div style={{
                    alignItems: "center",
                    width: "95%",
                    height: "auto",
                    marginLeft: '2.5%',
                    marginTop: 20
                }}>

                    {data.tabs[index].yearSummary && <Card variant='outlined'
                          sx={{backgroundColor: '#ffe9e9', border: 1, borderWidth: 2, m: 1, height: "auto", width: "90%"}}>

                        <div>
                            <Typography variant='p' fontSize='1' width="90%" height='390' margin="10" padding="auto">

                                {data.tabs[index].yearSummary}


                            </Typography>
                        </div>
                    </Card>}

                </div>


                <div style={{
                    alignItems: "center",
                    alignSelf: "center",
                    width: "auto",
                    height: "auto",
                    marginLeft: '0%',
                    marginBottom: 10
                }}>

                {data.tabs[index].RobotName &&
                    <Typography variant="h4" sx={{marginLeft: "20%"}}>

                        {data.tabs[index].RobotName}

                    </Typography>
                }
                </div>

                {data.tabs[index].CadModelPath &&
                    <div>
                        <Canvas frameloop="demand"
                                style={{
                                    width: "80%",
                                    marginLeft: "10%",
                                    height: 300,
                                    backgroundColor: (79, 79, 79),
                                    marginBottom: 10
                                }}>
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



                {data.tabs[index].RobotImagePath && <div>
                    <img src={data.tabs[index].RobotImagePath} height="auto" width="100%"
                         alt={data.tabs[index].year + " robot picture"}/>
                </div>}


            </div>

            <div style={{
                alignItems: "center",
                width: "95%",
                height: "auto",
                marginLeft: '2.5%',
                marginTop: 20
            }}>

                <Card variant='outlined'
                      sx={{
                          backgroundColor: '#ffe9e9',
                          border: 1,
                          borderWidth: 2,
                          m: 1,
                          height: "auto",
                          width: "90%",
                          alignContent: 'center',
                          alignItems: 'center'
                      }}>


                        <Typography variant='h5' fontSize='1' width="auto" height='390' margin="10">
                            {data.tabs[index].GameReveal && <a rel="noreferrer noopener" target="_blank"
                                                               href={"https://www.youtube.com/watch?v=" + data.tabs[index].GameReveal}
                                                               >{data.tabs[index].year + " Game Animation \n"}</a>}
                        </Typography>
                        <Typography variant='h5' fontSize='1' width="auto" height='390' margin="10">
                            {data.tabs[index].RevealVideo && <a rel="noreferrer noopener" target="_blank"
                                                                href={"https://www.youtube.com/watch?v=" + data.tabs[index].RevealVideo}
                                                                >{data.tabs[index].year + " Robot Reveal \n"}</a>}
                        </Typography>
                        <Typography variant='h5' fontSize='1' width="auto" height='390' margin="10">
                            {data.tabs[index].RecapVideo && <a rel="noreferrer noopener" target="_blank"
                                                               href={"https://www.youtube.com/watch?v=" + data.tabs[index].RecapVideo}
                                                               >{data.tabs[index].year + " Season Recap \n"}</a>}
                        </Typography>

                </Card>

                {data.tabs[index].GithubCode &&
                    <a rel="noreferrer noopener" target="_blank"
                       href={data.tabs[index].GithubCode}
                       style={{color: '#90caf9'}}>
                        <img src="/images/resources/GitHub_Logo.png" alt="Link To Github Repo" width="auto"
                             height="100"/>
                    </a>
                }

            </div>


        </div>
    );
}


RobotHistoryTabMobile.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};