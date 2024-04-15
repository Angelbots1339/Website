import {Box, Button, Grid, Paper, Typography, useMediaQuery} from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";
import { motion } from "framer-motion"
import {mainTheme} from "../theme";
export default function Home() {


    // This code can be used for variable size on mobile vs desktop


    const homeJSON = require('./json/home.json');

    const bigScreen = useMediaQuery(mainTheme.breakpoints.up('sm'));


    // const [screenWidth, setScreenWidth] = useState(0);
    // function slideshowHeight() {
    //     let width = screenWidth * 0.7;
    //     return width / 2;
    // }
    //
    // function slideshowHeightMobile() {
    //     let width = screenWidth;
    //     return width / 1.777777;
    // }



    return (

        <div>


            {/*----------Big Screens----------*/}


                <Box sx={{display: {xs: 'none', sm: 'none', md: 'block'}}}>
                    <div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            height: "auto",
                        }}>
                            <Paper
                                sx={{width: '100%', height: "auto", backgroundColor: "#ffffff", boxShadow: 5}}>

                                <Box display="flex" alignItems="center" justifyContent="center">

                                    <SimpleImageSlider
                                        width={900}
                                        height={900 * (9/16)}
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


                        <Grid container spacing={5} sx={{width: "95%", height: "auto", ml: "1.25%", mt: 5}}>
                            {homeJSON.entries.map((entry) =>
                                <Grid item xs={12} sm={12} md={12} lg={entry.gridSpaces} xl={entry.gridSpaces}
                                      key={entry.name}>
                                    <motion.div
                                        style={{height: "100%"}}
                                        initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                                        whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                                        viewport={{margin: "100px", once: !bigScreen}}
                                    >
                                    <Paper
                                        sx={{width: '100%', height: "100%", boxShadow: 5, justifyContent: "center", borderRadius: 5}}>
                                        <Grid container spacing={5}
                                              sx={{width: "95%", ml: entry.gridSpaces > 6 ? "1.25%" : "0%", mt: 10}}>

                                            {entry.title &&
                                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                                      key={entry.name + " title"} sx={{justifyContent: "center"}}>
                                                    <Typography variant="h3" sx={{width: "100%"}} align="center">
                                                        {entry.title}
                                                    </Typography>
                                                </Grid>
                                            }


                                            {entry.topText &&
                                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                                      key={entry.name + " top text"} sx={{justifyContent: "center"}}>
                                                    <Typography variant="subtitle1" sx={{width: "100%", ml: "0%"}} align="center">
                                                        {entry.topText}
                                                    </Typography>
                                                </Grid>
                                            }

                                            {entry.imagePath &&
                                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                                      key={entry.name + " picture"} sx={{justifyContent: "center"}}>
                                                    <img src={entry.imagePath} alt={entry.name} width="100%" loading="lazy"
                                                         height="auto"
                                                         style={{borderRadius: 15, marginLeft: entry.gridSpaces <= 3 ? "-4%" : "0%"}}/>
                                                </Grid>
                                            }

                                            {entry.bottomText &&
                                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                                      key={entry.name + " bottom text"} sx={{justifyContent: "center"}}>
                                                    <Typography variant="subtitle1" sx={{width: "100%", ml: "0%"}} align="center">
                                                        {entry.bottomText}
                                                    </Typography>
                                                </Grid>
                                            }

                                            {entry.learnMoreText &&
                                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                                      key={entry.name + " Learn More Button"} sx={{justifyContent: "center"}}>
                                                    <Button variant="outlined" size={"large"} href={entry.learnMoreLink}
                                                            sx={{width: "50%", maxWidth: 300, ml: "25%"}} align="center">
                                                        {entry.learnMoreText}
                                                    </Button>
                                                </Grid>
                                            }
                                            {entry.learnMoreText2 && //i am so sorry
                                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                                      key={entry.name + " Learn More Button"} sx={{justifyContent: "center"}}>
                                                    <Button variant="outlined" size={"large"} href={entry.learnMoreLink2}
                                                            sx={{width: "50%", maxWidth: 300, ml: "25%"}} align="center">
                                                        {entry.learnMoreText2}
                                                    </Button>
                                                </Grid>
                                            }

                                        </Grid>
                                    </Paper>
                                </motion.div>
                                </Grid>
                            )}
                        </Grid>
                    </div>                </Box>



            {/*----------Small Screens----------*/}

                <Box sx={{display: {xs: 'block', sm: 'block', md: 'none'}}}>
                    <div style={{alignItems: "center", width: "100", height: "auto"}}>
                        <Paper sx={{width: '100%', height: "auto", backgroundColor: "#ffffff"}}>
                            <Box display="flex" alignItems="center" justifyContent="center" sx={{display: {xs: 'none', sm: 'flex', md: 'none'}}}>

                                <SimpleImageSlider
                                    width={600}
                                    height={600 * (9/16)}
                                    images={homeJSON.imageCarousel}
                                    showBullets={false}
                                    showNavs={true}
                                    loop={true}
                                    autoPlay={true}
                                    autoPlayDelay={6}
                                    bgColor={"#000000"}
                                />
                            </Box>
                            <Box display="flex" alignItems="center" justifyContent="center" sx={{display: {xs: 'flex', sm: 'none', md: 'none'}}}>

                                <SimpleImageSlider
                                    width={"90%"}
                                    height={400 * (9/16)}
                                    images={homeJSON.imageCarousel}
                                    showBullets={false}
                                    showNavs={true}
                                    navStyle={1}
                                    loop={true}
                                    autoPlay={true}
                                    autoPlayDelay={6}
                                    bgColor={"#000000"}
                                />
                            </Box>
                        </Paper>

                        <Box sx={{ml: -5, overflow: "hidden"}}>
                            <Grid container spacing={5} sx={{width: "95%", height: "auto", ml: "2.5%", mt: 1, mb:5}}>
                                {homeJSON.entries.map((entry) =>
                                    <Grid item xs={12} sm={12} md={12} lg={entry.gridSpaces} xl={entry.gridSpaces}
                                          key={entry.name}>
                                        <motion.div
                                            style={{height: "100%"}}
                                            initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                                            whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                                            viewport={{margin: "100px", once: !bigScreen}}
                                        >
                                        <Paper sx={{
                                            width: '100%',
                                            height: "100%",
                                            boxShadow: 5,
                                            justifyContent: "center",
                                            borderRadius: 5
                                        }}>
                                            <Grid container spacing={5} sx={{width: "90%", ml: "0%", mt: 1, mb: 2}}>

                                                {entry.title &&
                                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                                          key={entry.name + " title"} sx={{justifyContent: "center"}}>
                                                        <Typography variant="h3" sx={{width: "100%", ml: "-5%"}} align="center">
                                                            {entry.title}
                                                        </Typography>
                                                    </Grid>
                                                }


                                                {entry.topText &&
                                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                                          key={entry.name + " top text"} sx={{justifyContent: "center"}}>
                                                        <Typography variant="h6" sx={{width: "100%", ml: "-5%"}} align="center">
                                                            {entry.topText}
                                                        </Typography>
                                                    </Grid>
                                                }

                                                {entry.imagePath &&
                                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                                          key={entry.name + " picture"} sx={{justifyContent: "center"}}>
                                                        <Box sx={{ml: -3}}>
                                                            <img src={entry.imagePath} alt={entry.name} width="95%"
                                                                 style={{marginLeft: "2.5%", borderRadius: 15}}
                                                                 height="auto" loading="lazy"/>
                                                        </Box>
                                                    </Grid>
                                                }

                                                {entry.bottomText &&
                                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                                          key={entry.name + " bottom text"} sx={{justifyContent: "center"}}>
                                                        <Typography variant="h6" sx={{width: "100%", ml: "-5%"}} align="center">
                                                            {entry.bottomText}
                                                        </Typography>
                                                    </Grid>
                                                }

                                                {entry.learnMoreText &&
                                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                                          key={entry.name + " Learn More Button"} sx={{justifyContent: "center"}}>
                                                        <Button variant="outlined" size={"large"} href={entry.learnMoreLink}
                                                                sx={{width: "75%", maxWidth: 300, ml: "15%"}} align="center">
                                                            {entry.learnMoreText}
                                                        </Button>
                                                    </Grid>
                                                }
                                                {entry.learnMoreText2 &&
                                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                                          key={entry.name + " Learn More Button"} sx={{justifyContent: "center"}}>
                                                        <Button variant="outlined" size={"large"} href={entry.learnMoreLink2}
                                                                sx={{width: "75%", maxWidth: 300, ml: "15%"}} align="center">
                                                            {entry.learnMoreText2}
                                                        </Button>
                                                    </Grid>
                                                }

                                            </Grid>
                                        </Paper>
                                        </motion.div>
                                    </Grid>
                                )}
                            </Grid>
                        </Box>

                    </div>
                </Box>



        </div>

    );
}
