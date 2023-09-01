import {Box, Grid, Paper, Typography, useMediaQuery} from "@mui/material";
import {mainTheme} from "../theme";
import { motion } from "framer-motion"

export default function FirstRobotics() {
    // This code can be used for variable size on mobile vs desktop

    const bigScreen = useMediaQuery(mainTheme.breakpoints.up('sm'));


    const data = require('./json/firstRobotics.json');


    return (

        <div>

            <div style={{
                display: "flex",
                alignItems: "center",
                width: "90%",
                height: "auto",
                marginLeft: '2.5%',
                marginTop: 50
            }}>

                <Grid container spacing={2} sx={{width: "98%", height: "auto", ml: "0%", mr: "0%", mt: 1, mb: 2}}>

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <motion.div
                            style={{height: "100%"}}
                            initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                            whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                            viewport={{margin: "100px", once: !bigScreen}}
                        >
                        <Paper sx={{
                            width: "100%",
                            height: "auto",
                            justifyContent: "center",
                            boxShadow: 5,
                            borderRadius: 5,
                        }}>
                            <Grid container spacing={2} sx={{m: 2, p: 5}}>
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
                                            borderRadius: 5,
                                            marginTop: 0
                                        }}>
                                        <Typography variant="h6" sx={{mr: 5}}>
                                            {data.firstDescription}
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Paper>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <motion.div
                            style={{height: "100%"}}
                            initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                            whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                            viewport={{margin: "100px", once: !bigScreen}}
                        >
                        <Paper sx={{
                            width: "100%",
                            height: "auto",
                            justifyContent: "center",
                            borderRadius: 5,
                            boxShadow: 5
                        }}>

                            <Grid container spacing={2} sx={{p: 2}}>
                                <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>

                                    <a rel="noreferrer noopener" target="_blank"
                                       href={data.FRC.website}>
                                        <img src={data.FRC.logo} alt="FRC Logo" width="80%"
                                             height="auto" style={{marginBottom: 10, marginRight: 0, marginLeft: 5}}/>
                                    </a>

                                    <Typography variant="h6" sx={{mr: 3, ml: 5}}>
                                        {data.FRC.generalDescription}
                                    </Typography>

                                </Grid>


                                <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>

                                    <div style={{marginBottom: 20, marginTop: 20, marginLeft: "2.5%"}}>
                                        <iframe src={'https://www.youtube.com/embed/' + data.FRC.gameVideo + "?enablejsapi=1&origin=http://angelbotics.org"}
                                                // allow='autoplay; encrypted-media'
                                                allowFullScreen
                                                loading="lazy"
                                                style={{
                                                    width: "95%",
                                                    height: bigScreen ? 450 : 200,
                                                    borderRadius: 20

                                                }}
                                        />
                                    </div>

                                </Grid>
                            </Grid>
                        </Paper>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <motion.div
                            style={{height: "100%"}}
                            initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                            whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                            viewport={{margin: "100px", once: !bigScreen}}
                        >
                        <Paper sx={{width: "100%", height: "100%", boxShadow: 5, borderRadius: 5,}}>
                            <Box sx={{p: 5}}>
                                <a rel="noreferrer noopener" target="_blank"
                                   href={data.FTC.website}>
                                    <img src={data.FTC.logo} alt="FTC Logo" width="60%"
                                         height="auto" style={{margin: 20, width: "60"}}/>
                                </a>

                                <Typography variant="h6"
                                            sx={{marginRight: 5, marginBottom: 2, marginLeft: "5%"}}>
                                    {data.FTC.generalDescription}
                                </Typography>

                                <div style={{marginLeft: '5%'}}>
                                    <iframe src={'https://www.youtube.com/embed/' + data.FTC.gameVideo + "?enablejsapi=1&origin=http://angelbotics.org"}
                                            // allow='autoplay; encrypted-media'
                                            allowFullScreen
                                            loading="lazy"
                                            style={{
                                                width: "95%",
                                                height: bigScreen ? 350 : 200,
                                                borderRadius: 20
                                            }}
                                    />
                                </div>
                            </Box>

                        </Paper>
                        </motion.div>
                    </Grid>


                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <motion.div
                            style={{height: "100%"}}
                            initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                            whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                            viewport={{margin: "100px", once: !bigScreen}}
                        >
                        <Paper sx={{width: "100%", height: "100%", boxShadow: 5, borderRadius: 5,}}>
                            <Box sx={{p: 5}}>
                                <a rel="noreferrer noopener" target="_blank"
                                   href={data.FLL.website}>
                                    <img src={data.FLL.logo} alt="FLL Logo" width="60%"
                                         height="auto" style={{margin: 20}}/>
                                </a>

                                <Typography variant="h6"
                                            sx={{marginRight: 5, marginBottom: 2, marginLeft: "5%"}}>
                                    {data.FLL.generalDescription}
                                </Typography>

                                <div style={{marginLeft: '5%'}}>
                                    <iframe src={'https://www.youtube.com/embed/' + data.FLL.gameVideo + "?enablejsapi=1&origin=http://angelbotics.org"}
                                            // allow='autoplay; encrypted-media'
                                            loading="lazy"
                                            allowFullScreen
                                            style={{
                                                width: "95%",
                                                height: bigScreen ? 350 : 200,
                                                borderRadius: 20
                                            }}
                                    />

                                </div>
                            </Box>
                        </Paper>
                        </motion.div>
                    </Grid>

                    {!bigScreen && <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <motion.div
                            style={{height: "100%"}}
                            initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                            whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                            viewport={{margin: "100px", once: !bigScreen}}
                        >
                        <Paper sx={{width: "100%", height: "100%", boxShadow: 5, borderRadius: 5}}>
                            <Typography variant='h5' fontSize='1' width="auto" height='390' sx={{m: 2}}>
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
                        </Paper>
                        </motion.div>
                    </Grid>}
                </Grid>
            </div>
        </div>
    );
}

