import {useEffect, useState} from "react";
import {Box, Paper} from "@mui/material";
import {Helmet} from "react-helmet";
import ky from 'ky';
import homeJSON from "./home.json";
import SimpleImageSlider from "react-simple-image-slider";
import CuratorWidget from "./CuratorWidget";
import InstagramPost from "./instagramPost";


export default function Home() {


    // This code can be used for variable size on mobile vs desktop
    //
    //
    const [isScreenBig, setScreenBig] = useState(false);

    const homeJSON = require('./home.json');



    useEffect(() => {

        setScreenBig(window.innerWidth > 1200);



    }, []);


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


                        <Paper sx={{width: '100%', height: 650, backgroundColor:"#ffffff"}}>

                            <Box display="flex" alignItems="center" justifyContent="center" sx={{marginTop:0}}>

                                <SimpleImageSlider
                                    width="70%"
                                    height={650}
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

                               {/*<CuratorWidget feedId="cc149bda-3c10-493d-afa8-fa4c8c792434"/>*/}
                               {/* <InstagramPost/>*/}


                            </Box>

                        </Paper>

                        <Paper sx={{width: '40%', height: 600, marginLeft: '5%'}}>

                            <Box display="flex" alignItems="center" justifyContent="center">

                                <p>Info about the team/mission statement</p>

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


                        <Paper sx={{width: '90%', height: 500, marginLeft: '5%'}}>

                            <Box display="flex" alignItems="center" justifyContent="center">

                                <p>More Info Here</p>

                            </Box>


                        </Paper>


                    </div>


                </div>

            }


            {/*----------Small Screens----------*/}

            {!isScreenBig &&

                <div style={{alignItems: "center", width: "100", height: 700}}>



                    <Paper sx={{width: '100%', height: 200, backgroundColor:"#ffffff"}}>

                        <Box display="flex" alignItems="center" justifyContent="center" sx={{marginTop:0}}>

                            <SimpleImageSlider
                                width="100%"
                                height={200}
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

                    <Paper sx={{width: '100%', height: 300, marginTop:3}}>

                        <Box display="flex" alignItems="center" justifyContent="center" sx={{marginTop:0}}>

                            <CuratorWidget feedId="cc149bda-3c10-493d-afa8-fa4c8c792434"/>

                        </Box>

                    </Paper>



                </div>

            }


        </div>

    );
}
