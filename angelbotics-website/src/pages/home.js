import {useEffect, useState} from "react";
import {Box, Paper} from "@mui/material";
import {Helmet} from "react-helmet";
import ky from 'ky';



export default function Home() {


    // This code can be used for variable size on mobile vs desktop
    //
    //
    const [isScreenBig, setScreenBig] = useState(false);


    useEffect(() => {

        setScreenBig(window.innerWidth > 800);




    }, []);















    return (

        <div>


            {/*----------Big Screens----------*/}

            {isScreenBig &&

                <div>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        width: "95%",
                        height: "auto",
                        marginLeft: '2.5%',
                        marginTop: 100
                    }}>


                        <Paper sx={{width: '40%', height: 500}}>

                            <Box display="flex" alignItems="center" justifyContent="center">





                            </Box>

                        </Paper>

                        <Paper sx={{width: '55%', height: 500, marginLeft: '5%'}}>

                            <Box display="flex" alignItems="center" justifyContent="center">

                                <p>Idk what goes here</p>

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


                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        height: "auto",
                        marginTop: 100
                    }}>


                        <Paper sx={{width: '100%', height: 150}}>

                            <Box display="flex" alignItems="center" justifyContent="center">

                                <p>Sponsors</p>

                            </Box>


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
