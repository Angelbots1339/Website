import {Box, Grid, Paper, Typography, useMediaQuery} from "@mui/material";
import {motion} from "framer-motion"
import {mainTheme} from "../theme";

export default function Supporters() {

    const bigScreen = useMediaQuery(mainTheme.breakpoints.up('sm'));

    const supportersJSON = require('./json/supporters.json');


    const sponsorsLevel1 = supportersJSON.Sponsors.map((sponsor) => {
        if (sponsor.level === 1) return sponsor;
    }).filter(Boolean);
    const sponsorsLevel2 = supportersJSON.Sponsors.map((sponsor) => {
        if (sponsor.level === 2) return sponsor;
    }).filter(Boolean);
    const sponsorsLevel3 = supportersJSON.Sponsors.map((sponsor) => {
        if (sponsor.level === 3) return sponsor;
    }).filter(Boolean);
    const sponsorsLevel4 = supportersJSON.Sponsors.map((sponsor) => {
        if (sponsor.level === 4) return sponsor;
    }).filter(Boolean);
    const sponsorsLevel5 = supportersJSON.Sponsors.map((sponsor) => {
        if (sponsor.level === 5) return sponsor;
    }).filter(Boolean);

    function getSponsorHeight(level) {
        if (level === 1) return 250;
        if (level === 2) return 200;
        if (level === 3) return 100;
        if (level === 4) return 80;
        if (level === 5) return 80;
    }


    return (
        <div>
            <Box sx={{display: {xs: "none", sm: "block", md: "block"}}}>
                <div>
                    <div style={{
                        alignItems: "center",
                        width: "95%",
                        height: "auto",
                        marginLeft: '2.5%',
                        marginTop: 50
                    }}>

                        <Paper sx={{width: '100%', height: "auto", boxShadow: 5, borderRadius:5}}>

                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "95%",
                                height: 'auto',
                                marginLeft: '2.5%',
                                paddingTop: 10,
                                paddingBottom: 10
                            }}>
                                <Typography variant="h3">
                                    Sponsors
                                </Typography>
                            </div>

                            <div style={{
                                alignItems: "center",
                                justifyContent: "center",
                                width: "100%",
                                height: "auto",
                                marginLeft: '0%',
                                marginTop: 20,
                                marginBottom: 20,
                                paddingBottom: 50
                            }}>

                                <motion.div
                                    style={{height: "100%"}}
                                    initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                                    whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                                    viewport={{margin: "100px", once: !bigScreen}}
                                >
                                    {sponsorsLevel1.length > 0 && <div style={{
                                        alignItems: "center",
                                        width: "95%",
                                        height: "auto",
                                        marginLeft: '2.5%',
                                        marginTop: 50
                                    }}>
                                        <Grid container spacing={2}
                                              sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>


                                            {sponsorsLevel1.map((sponsor) =>
                                                <Grid item xs={12} sm={12} md={12} lg={8} xl={6} sx={{
                                                    mx: "auto",
                                                    textAlign: "center",
                                                    height: getSponsorHeight(sponsor.level) + 10
                                                }}
                                                      key={sponsor.name}>
                                                    <a rel="noreferrer noopener" target="_blank"
                                                       href={sponsor.website}
                                                       style={{color: '#000000'}}>
                                                        <img src={sponsor.logo} width="auto"
                                                             height={getSponsorHeight(sponsor.level)}
                                                             alt={sponsor.name}/>
                                                    </a>
                                                </Grid>)}
                                        </Grid>
                                    </div>}
                                </motion.div>

                                <motion.div
                                    style={{height: "100%"}}
                                    initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                                    whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                                    viewport={{margin: "100px", once: !bigScreen}}
                                >
                                    {sponsorsLevel2.length > 0 && <div style={{
                                        alignItems: "center",
                                        width: "95%",
                                        height: "auto",
                                        marginLeft: '2.5%',
                                        marginTop: 50
                                    }}>
                                        <Grid container spacing={2}
                                              sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>
                                            {sponsorsLevel2.map((sponsor) =>
                                                <Grid item xs={12} sm={12} md={12} lg={8} xl={6} sx={{
                                                    mx: "auto",
                                                    textAlign: "center",
                                                    height: getSponsorHeight(sponsor.level) + 10
                                                }}
                                                      key={sponsor.name}>
                                                    <a rel="noreferrer noopener" target="_blank"
                                                       href={sponsor.website}
                                                       style={{color: '#000000'}}>
                                                        <img src={sponsor.logo} width="auto"
                                                             height={getSponsorHeight(sponsor.level)}
                                                             alt={sponsor.name}/>
                                                    </a>
                                                </Grid>)}
                                        </Grid>
                                    </div>}
                                </motion.div>
                                <motion.div
                                    style={{height: "100%"}}
                                    initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                                    whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                                    viewport={{margin: "0px", once: !bigScreen}}
                                >

                                    {sponsorsLevel3.length > 0 && <div style={{
                                        alignItems: "center",
                                        width: "95%",
                                        height: "auto",
                                        marginLeft: '2.5%',
                                        marginTop: 50
                                    }}>
                                        <Grid container spacing={2}
                                              sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>
                                            {sponsorsLevel3.map((sponsor) =>
                                                <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{
                                                    mx: "auto",
                                                    textAlign: "center",
                                                    height: getSponsorHeight(sponsor.level) + 10
                                                }}
                                                      key={sponsor.name}>
                                                    <a rel="noreferrer noopener" target="_blank"
                                                       href={sponsor.website}
                                                       style={{color: '#000000'}}>
                                                        <img src={sponsor.logo} width="auto"
                                                             height={getSponsorHeight(sponsor.level)}
                                                             alt={sponsor.name}/>
                                                    </a>
                                                </Grid>)}
                                        </Grid>
                                    </div>}
                                </motion.div>
                                <motion.div
                                    style={{height: "100%"}}
                                    initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                                    whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                                    viewport={{margin: "0px", once: !bigScreen}}
                                >


                                    {sponsorsLevel4.length > 0 && <div style={{
                                        alignItems: "center",
                                        width: "95%",
                                        height: "auto",
                                        marginLeft: '2.5%',
                                        marginTop: 50
                                    }}>
                                        <Grid container spacing={2}
                                              sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>
                                            {sponsorsLevel4.map((sponsor) =>
                                                <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{
                                                    mx: "auto",
                                                    textAlign: "center",
                                                    height: getSponsorHeight(sponsor.level) + 10
                                                }}
                                                      key={sponsor.name}>
                                                    <a rel="noreferrer noopener" target="_blank"
                                                       href={sponsor.website}
                                                       style={{color: '#000000'}}>
                                                        <img src={sponsor.logo} width="auto"
                                                             height={getSponsorHeight(sponsor.level)}
                                                             alt={sponsor.name}/>
                                                    </a>
                                                </Grid>)}
                                        </Grid>
                                    </div>}
                                </motion.div>
                                <motion.div
                                    style={{height: "100%"}}
                                    initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                                    whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                                    viewport={{margin: "0px", once: !bigScreen}}
                                >
                                    {sponsorsLevel5.length > 0 && <div style={{
                                        alignItems: "center",
                                        width: "95%",
                                        height: "auto",
                                        marginLeft: '2.5%',
                                        marginTop: 50
                                    }}>
                                        <Grid container spacing={2}
                                              sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>
                                            {sponsorsLevel5.map((sponsor) =>
                                                <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{
                                                    mx: "auto",
                                                    textAlign: "center",
                                                    height: getSponsorHeight(sponsor.level) + 10
                                                }}
                                                      key={sponsor.name}>
                                                    <a rel="noreferrer noopener" target="_blank"
                                                       href={sponsor.website}
                                                       style={{color: '#000000'}}>
                                                        <img src={sponsor.logo} width="auto"
                                                             height={getSponsorHeight(sponsor.level)}
                                                             alt={sponsor.name}/>
                                                    </a>
                                                </Grid>)}
                                        </Grid>
                                    </div>}
                                </motion.div>
                            </div>

                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "95%",
                                height: 'auto',
                                marginLeft: '2.5%',
                                paddingTop: 10,
                                paddingBottom: 10
                            }}>
                                <Typography variant="h3">
                                    Donors
                                </Typography>
                            </div>
                            <div style={{
                                display: "flex",
                                alignItems: "left",
                                justifyContent: "center",
                                width: "95%",
                                height: 'auto',
                                marginLeft: '2.5%',
                                paddingTop: 10,
                                paddingBottom: 10
                            }}>
                                {supportersJSON.Donors.map((donor, idx) =>
                                    <Typography variant="h4">
                                        {donor.name}{idx !== supportersJSON.Donors.length - 1 ? "\u00A0•\u00A0" : ""}
                                        {/* prints donor name, then a dot if it isn't the last donor,
                                        which is surrounded by non breaking spaces because html is funny*/}
                                    </Typography>
                                )}
                            </div>

                        </Paper>


                    </div>

                </div>
            </Box>


            {/*-----------------SMALL SCREEN-------------------------*/}

            <Box sx={{display: {xs: "block", sm: "none", md: "none"}}}>
                <div>
                    <Paper sx={{width: '100%', height: "auto", marginTop: 10, borderRadius:5}}>
                        <Typography variant="h3" sx={{marginLeft: "15%"}}>
                            Sponsors
                        </Typography>


                        <motion.div
                            style={{height: "100%"}}
                            initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                            whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                            viewport={{margin: "0px", once: !bigScreen}}
                        >
                            {sponsorsLevel1.length > 0 && <div style={{
                                alignItems: "center",
                                width: "95%",
                                height: "auto",
                                marginLeft: '2.5%',
                                marginTop: 50
                            }}>
                                <Grid container spacing={2} sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>


                                    {sponsorsLevel1.map((sponsor) =>
                                        <Grid item xs={12} sx={{mx: "auto", textAlign: "center", height: "auto"}}
                                              key={sponsor.name + "_mobile"}>
                                            <a rel="noreferrer noopener" target="_blank"
                                               href={sponsor.website}
                                               style={{color: '#000000'}}>
                                                <img src={sponsor.logo} width={"100%"}
                                                     height={"auto"} alt={sponsor.name}/>
                                            </a>
                                        </Grid>)}
                                </Grid>
                            </div>}
                        </motion.div>
                        <motion.div
                            style={{height: "100%"}}
                            initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                            whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                            viewport={{margin: "0px", once: !bigScreen}}
                        >

                            {sponsorsLevel2.length > 0 && <div style={{
                                alignItems: "center",
                                width: "95%",
                                height: "auto",
                                marginLeft: '2.5%',
                                marginTop: 100
                            }}>
                                <Grid container spacing={2} sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>
                                    {sponsorsLevel2.map((sponsor) =>
                                        <Grid item xs={12} sx={{mx: "auto", textAlign: "center", height: "auto"}}
                                              key={sponsor.name + "_mobile"}>
                                            <a rel="noreferrer noopener" target="_blank"
                                               href={sponsor.website}
                                               style={{color: '#000000'}}>
                                                <img src={sponsor.logo} width={"100%"}
                                                     height={"auto"} alt={sponsor.name}/>
                                            </a>
                                        </Grid>)}
                                </Grid>
                            </div>}
                        </motion.div>
                        <motion.div
                            style={{height: "100%"}}
                            initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                            whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                            viewport={{margin: "0px", once: !bigScreen}}
                        >

                            {sponsorsLevel3.length > 0 && <div style={{
                                alignItems: "center",
                                width: "95%",
                                height: "auto",
                                marginLeft: '2.5%',
                                marginTop: 100
                            }}>
                                <Grid container spacing={2} sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>
                                    {sponsorsLevel3.map((sponsor) =>
                                        <Grid item xs={6} sx={{mx: "auto", textAlign: "center", height: "auto"}}
                                              key={sponsor.name + "_mobile"}>
                                            <a rel="noreferrer noopener" target="_blank"
                                               href={sponsor.website}
                                               style={{color: '#000000'}}>
                                                <img src={sponsor.logo} width={"100%"}
                                                     height={"auto"} alt={sponsor.name}/>
                                            </a>
                                        </Grid>)}
                                </Grid>
                            </div>}
                        </motion.div>
                        <motion.div
                            style={{height: "100%"}}
                            initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                            whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                            viewport={{margin: "0px", once: !bigScreen}}
                        >

                            {sponsorsLevel4.length > 0 && <div style={{
                                alignItems: "center",
                                width: "95%",
                                height: "auto",
                                marginLeft: '2.5%',
                                marginTop: 100
                            }}>
                                <Grid container spacing={2} sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>
                                    {sponsorsLevel4.map((sponsor) =>
                                        <Grid item xs={6} sx={{mx: "auto", textAlign: "center", height: "auto"}}
                                              key={sponsor.name + "_mobile"}>
                                            <a rel="noreferrer noopener" target="_blank"
                                               href={sponsor.website}
                                               style={{color: '#000000'}}>
                                                <img src={sponsor.logo} width={"100%"}
                                                     height={"auto"} alt={sponsor.name}/>
                                            </a>
                                        </Grid>)}
                                </Grid>
                            </div>}
                        </motion.div>
                        <motion.div
                            style={{height: "100%"}}
                            initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                            whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                            viewport={{margin: "0px", once: !bigScreen}}
                        >

                            {sponsorsLevel5.length > 0 && <div style={{
                                alignItems: "center",
                                width: "95%",
                                height: "auto",
                                marginLeft: '2.5%',
                                marginTop: 50
                            }}>
                                <Grid container spacing={2} sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>
                                    {sponsorsLevel5.map((sponsor) =>
                                        <Grid item xs={6} sx={{mx: "auto", textAlign: "center", height: "auto"}}
                                              key={sponsor.name + "_mobile"}>
                                            <a rel="noreferrer noopener" target="_blank"
                                               href={sponsor.website}
                                               style={{color: '#000000'}}>
                                                <img src={sponsor.logo} width={"100%"}
                                                     height={"auto"} alt={sponsor.name}/>
                                            </a>
                                        </Grid>)}
                                </Grid>
                            </div>}
                        </motion.div>
                        <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "95%",
                                height: 'auto',
                                marginLeft: '2.5%',
                                paddingTop: 10,
                                paddingBottom: 10
                            }}>
                                <Typography variant="h3">
                                    Donors
                                </Typography>
                            </div>
                            {supportersJSON.Donors.map((donor, idx) =>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "95%",
                                    height: 'auto',
                                    marginLeft: '2.5%',
                                    paddingTop: 10,
                                    paddingBottom: 10
                                }}>
                                    <Typography variant="h4">
                                        {donor.name}
                                    </Typography>
                                </div>
                            )}
                    </Paper>


                </div>

            </Box>

            <motion.div
                style={{height: "100%"}}
                initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                viewport={{margin: "0px", once: !bigScreen}}
            >
                <Paper sx={{width: '95%', height: 'auto', marginBottom: 5, boxShadow: 5, mt: 5, ml: "2.5%", borderRadius:5}}>

                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "95%",
                        height: 'auto',
                        marginLeft: '2.5%',
                        paddingTop: 10,
                        paddingBottom: 10
                    }}>
                        <Typography variant="h3">
                            Mentors
                        </Typography>
                    </div>
                </Paper>
            </motion.div>

            <Grid container spacing={2}
                  sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>
                {supportersJSON.mentors.map((mentor) =>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{
                        mx: "auto",
                        textAlign: "center",
                        height: "auto"
                    }}
                          key={mentor.name}>
                        <motion.div
                            style={{height: "100%"}}
                            initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                            whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                            viewport={{margin: "0px", once: !bigScreen}}
                        >
                            <Paper sx={{width: '100%', height: "100%", boxShadow: 5, borderRadius:5}}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: "center",
                                    width: "95%",
                                    height: 'auto',
                                    marginLeft: '2.5%',
                                    marginTop: 10,
                                    marginBottom: 2
                                }}>
                                    <Grid container spacing={2}
                                          sx={{width: '95%', marginLeft: '2.5%', marginRight: '2.5%'}}>
                                        <Grid item xs={12} sm={12} md={12} lg={5} xl={5} sx={{
                                            mx: "auto",
                                            textAlign: "center",
                                            height: "auto"
                                        }}
                                              key={mentor.name + " inner"}>
                                            <img src={mentor.imagePath} alt={mentor.name} width="auto" height="200"
                                                 style={{borderRadius: 15, marginTop: 10}}/>
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={12} lg={7} xl={7} sx={{
                                            mx: "auto",
                                            textAlign: "center",
                                            height: "auto"
                                        }}
                                              key={mentor.name}>
                                            <div>
                                                <Typography variant="h4" sx={{mb: 2, mt: 2}}>
                                                    {mentor.name}
                                                </Typography>
                                                <Typography variant="h6" sx={{mb: 10}}>
                                                    {mentor.description}
                                                </Typography>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Paper>
                        </motion.div>
                    </Grid>)}
            </Grid>


        </div>
    );


}