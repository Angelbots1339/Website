import {useEffect, useState} from "react";
import {Box, Grid, Paper, Typography} from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";

export default function Home() {


    const [isScreenBig, setScreenBig] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);
    // This code can be used for variable size on mobile vs desktop


    const homeJSON = require('./json/home.json');

    useEffect(() => {

        setScreenBig(window.innerWidth > 1200);

        setScreenWidth(window.innerWidth);


    }, []);


    function slideshowHeight() {
        let width = screenWidth * 0.7;
        return width / 2;
    }

    function slideshowHeightMobile() {
        let width = screenWidth;
        return width / 1.777777;
    }


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
                    }}>

                        <Paper
                            sx={{width: '100%', height: slideshowHeight(), backgroundColor: "#ffffff", boxShadow: 5}}>

                            <Box display="flex" alignItems="center" justifyContent="center">

                                <SimpleImageSlider
                                    width="70%"
                                    height={slideshowHeight()}
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


                    <Grid container spacing={5} sx={{width: "95%", height:"auto", ml: "1.25%", mt: 5}}>
                        {homeJSON.entries.map((entry) =>
                            <Grid item xs={12} sm={12} md={12} lg={entry.gridSpaces} xl={entry.gridSpaces}
                                  key={entry.name}>
                                <Paper sx={{width: '100%', height: "100%", boxShadow: 5, justifyContent: "center"}}>
                                    <Grid container spacing={5} sx={{width: "95%", ml: "1.25%", mt: 10}}>

                                        {entry.title &&
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                                  key={entry.name + " title"} sx={{justifyContent: "center"}}>
                                                <Typography variant="h3" sx={{width: "100%"}} align="center">
                                                    {entry.title}
                                                </Typography>
                                            </Grid>
                                        }


                                        {entry.text &&
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                                  key={entry.name + " text"} sx={{justifyContent: "center"}}>
                                                <Typography variant="h4" sx={{width: "100%"}} align="center">
                                                    {entry.text}
                                                </Typography>
                                            </Grid>
                                        }

                                        {entry.imagePath &&
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                                  key={entry.name + " picture"} sx={{justifyContent: "center"}}>
                                                <img src={entry.imagePath} alt={entry.name} width="95%"
                                                     height="auto" style={{borderRadius:15}}/>
                                            </Grid>
                                        }

                                    </Grid>
                                </Paper>
                            </Grid>
                        )}
                    </Grid>
                </div>

            }


            {/*----------Small Screens----------*/}

            {!isScreenBig &&

                <div style={{alignItems: "center", width: "100", height: "auto"}}>
                    <Paper sx={{width: '100%', height: slideshowHeightMobile(), backgroundColor: "#ffffff"}}>
                        <Box display="flex" alignItems="center" justifyContent="center">

                            <SimpleImageSlider
                                width="100%"
                                height={slideshowHeightMobile()}
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

                    <Box sx={{ml:-5}}>
                    <Grid container spacing={5} sx={{width: "95%", height:"auto", ml: "2.5%", mt: 1}}>
                        {homeJSON.entries.map((entry) =>
                            <Grid item xs={12} sm={12} md={12} lg={entry.gridSpaces} xl={entry.gridSpaces}
                                  key={entry.name}>
                                <Paper sx={{width: '100%', height: "100%", boxShadow: 5, justifyContent: "center"}}>
                                    <Grid container spacing={5} sx={{width: "100%", ml: "0%", mt: 1}}>

                                        {entry.title &&
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                                  key={entry.name + " title"} sx={{justifyContent: "center"}}>
                                                <Typography variant="h4" sx={{width: "100%", ml:"-5%"}} align="center">
                                                    {entry.title}
                                                </Typography>
                                            </Grid>
                                        }


                                        {entry.text &&
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                                  key={entry.name + " text"} sx={{justifyContent: "center"}}>
                                                <Typography variant="h6" sx={{width: "100%", ml:"-5%"}} align="center">
                                                    {entry.text}
                                                </Typography>
                                            </Grid>
                                        }

                                        {entry.imagePath &&
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                                  key={entry.name + " picture"} sx={{justifyContent: "center"}}>
                                                <Box sx={{ml:-3}}>
                                                <img src={entry.imagePath} alt={entry.name} width="95%" style={{marginLeft:"2.5%", borderRadius:15}}
                                                     height="auto"/>
                                                </Box>
                                            </Grid>
                                        }

                                    </Grid>
                                </Paper>
                            </Grid>
                        )}
                    </Grid>
                    </Box>

                </div>

            }


        </div>

    );
}
