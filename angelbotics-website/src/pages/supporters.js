import {Grid, Paper, Typography} from "@mui/material";
import sponsorsJSON from "./sponsors.json";
import {useEffect, useState} from "react";

export default function Supporters() {

    const [isScreenBig, setScreenBig] = useState(false);

    useEffect(() => {
        setScreenBig(window.innerWidth > 1200);
    }, []);


    const sponsorsJSON = require('./sponsors.json');

    const sponsorsLevel1 = sponsorsJSON.Sponsors.map((sponsor) => {
        if (sponsor.level === 1) return sponsor;
    }).filter(Boolean);
    const sponsorsLevel2 = sponsorsJSON.Sponsors.map((sponsor) => {
        if (sponsor.level === 2) return sponsor;
    }).filter(Boolean);
    const sponsorsLevel3 = sponsorsJSON.Sponsors.map((sponsor) => {
        if (sponsor.level === 3) return sponsor;
    }).filter(Boolean);
    const sponsorsLevel4 = sponsorsJSON.Sponsors.map((sponsor) => {
        if (sponsor.level === 4) return sponsor;
    }).filter(Boolean);
    const sponsorsLevel5 = sponsorsJSON.Sponsors.map((sponsor) => {
        if (sponsor.level === 5) return sponsor;
    }).filter(Boolean);
    const sponsorsLevel6 = sponsorsJSON.Sponsors.map((sponsor) => {
        if (sponsor.level === 6) return sponsor;
    }).filter(Boolean);
    const sponsorsLevel7 = sponsorsJSON.Sponsors.map((sponsor) => {
        if (sponsor.level === 7) return sponsor;
    }).filter(Boolean);

    function getSponsorHeight(level) {
        if (level === 1) return 250;
        if (level === 2) return 200;
        if (level === 3) return 100;
        if (level === 4) return 100;
        if (level === 5) return 80;
        if (level === 6) return 50;
        if (level === 7) return 50;
    }

    function getSponsorWidthMobile(level) {
        if (level === 1) return 300;
        if (level === 2) return 300;
        if (level === 3) return 200;
        if (level === 4) return 150;
        if (level === 5) return 150;
        if (level === 6) return 100;
        if (level === 7) return 100;
    }

    return (
        <div>

            {isScreenBig &&
                <div>

                    <Paper sx={{width: '100%', height: 'auto'}}>

                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            width: "95%",
                            height: 'auto',
                            marginLeft: '2.5%',
                            paddingTop:10,
                            paddingBottom:10
                        }}>


                        <Typography variant="h1" sx={{marginLeft:'40%'}}>

                            Mentors

                        </Typography>

                        </div>

                    </Paper>



                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        width: "95%",
                        height: 'auto',
                        marginLeft: '2.5%',
                        marginTop: 30
                    }}>

                        <Paper sx={{width: '50%', height: 'auto'}}>
                            <div style={{
                                display: 'flex',
                                alignItems: "center",
                                width: "95%",
                                height: 'auto',
                                marginLeft: '2.5%',
                                marginTop: 10,
                                marginBottom:10
                            }}>
                                <img src="/images/supporters/noble.JPG" alt="Joel Noble" width="auto" height="200"/>

                                <div>
                                    <Typography variant="h4" sx={{marginLeft: '30%', marginBottom: 2}}>
                                        Joel Noble
                                    </Typography>
                                    <Typography variant="h6" sx={{marginLeft: 5, mb:10}}>
                                        Joel Noble is a founder, and has been the lead mentor and head coach
                                        since the team started in 2004. He plays a crucial role in keeping
                                        Angelbotics operational, and is an amazing person.
                                    </Typography>
                                </div>
                            </div>
                        </Paper>

                        <Paper sx={{width: '50%', height: 'auto', marginLeft: 2}}>
                            <div style={{
                                display: 'flex',
                                alignItems: "center",
                                width: "95%",
                                height: 'auto',
                                marginLeft: '2.5%',
                                marginTop: 10,
                                marginBottom:10
                            }}>
                                <img src="/images/supporters/noble.JPG" alt="Carol Layng" width="auto" height="200"/>

                                <div>
                                    <Typography variant="h4" sx={{marginLeft: '30%', marginBottom: 5}}>
                                        Carol Layng
                                    </Typography>
                                    <Typography variant="h6" sx={{marginLeft: 5}}>
                                        Carol specializes in strategy, and contributes to scouting. She also does a ton
                                        of
                                        planning, and ensures that the team will be able to compete.
                                    </Typography>
                                </div>
                            </div>
                        </Paper>
                    </div>

                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        width: "95%",
                        height: 'auto',
                        marginLeft: '2.5%',
                        marginTop: 30
                    }}>

                        <Paper sx={{width: '50%', height: 'auto'}}>
                            <div style={{
                                display: 'flex',
                                alignItems: "center",
                                width: "95%",
                                height: 'auto',
                                marginLeft: '2.5%',
                                marginTop: 10,
                                marginBottom:10
                            }}>
                                <img src="/images/supporters/noble.JPG" alt="Chad B" width="auto" height="200"/>

                                <div>
                                    <Typography variant="h4" sx={{marginLeft: '30%', marginBottom: 5}}>
                                        Chad B
                                    </Typography>
                                    <Typography variant="h6" sx={{marginLeft: 5}}>
                                        Chad mentors our Programming and Electrical sub-teams. He helps diagnose issues
                                        with the electrical, and helps brainstorm about the concept behind the code.
                                    </Typography>
                                </div>
                            </div>
                        </Paper>

                        {/*                 Use this section for another mentor                      */}

                        {/*<Paper sx={{width: '50%', height: 250, marginLeft: 2}}>*/}
                        {/*    <div style={{*/}
                        {/*        display: 'flex',*/}
                        {/*        alignItems: "center",*/}
                        {/*        width: "95%",*/}
                        {/*        height: 250,*/}
                        {/*        marginLeft: '2.5%',*/}
                        {/*        marginTop: 0*/}
                        {/*    }}>*/}
                        {/*        <img src="/images/supporters/" alt="" width="auto" height="200"/>*/}

                        {/*        <div>*/}
                        {/*            <Typography variant="h4" sx={{marginLeft: '30%', marginBottom: 5}}>*/}


                        {/*            </Typography>*/}
                        {/*            <Typography variant="h6" sx={{marginLeft: 5}}>*/}

                        {/*            </Typography>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</Paper>*/}
                    </div>

                    <div style={{
                        alignItems: "center",
                        width: "95%",
                        height: "auto",
                        marginLeft: '2.5%',
                        marginTop: 50
                    }}>

                        <Paper sx={{width: '100%', height: "auto"}}>

                            <div style={{
                                alignItems: "center",
                                width: "100%",
                                height: "auto",
                                marginLeft: '0%',
                                marginTop: 20,
                                marginBottom: 20,
                                paddingBottom:50
                            }}>
                                <Typography variant="h1" sx={{marginLeft: "40%"}}>
                                    Sponsors
                                </Typography>

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
                                            <Grid item xs={6} sx={{
                                                mx: "auto",
                                                textAlign: "center",
                                                height: getSponsorHeight(sponsor.level) + 10
                                            }}
                                                  key={sponsor.name}>
                                                <a rel="noreferrer noopener" target="_blank"
                                                   href={sponsor.website}
                                                   style={{color: '#000000'}}>
                                                    <img src={sponsor.logo} width="auto"
                                                         height={getSponsorHeight(sponsor.level)}/>
                                                </a>
                                            </Grid>)}
                                    </Grid>
                                </div>}

                                {sponsorsLevel2.length > 0 && <div style={{
                                    alignItems: "center",
                                    width: "95%",
                                    height: "auto",
                                    marginLeft: '2.5%',
                                    marginTop: 200
                                }}>
                                    <Grid container spacing={2}
                                          sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>
                                        {sponsorsLevel2.map((sponsor) =>
                                            <Grid item xs={6} sx={{
                                                mx: "auto",
                                                textAlign: "center",
                                                height: getSponsorHeight(sponsor.level) + 10
                                            }}
                                                  key={sponsor.name}>
                                                <a rel="noreferrer noopener" target="_blank"
                                                   href={sponsor.website}
                                                   style={{color: '#000000'}}>
                                                    <img src={sponsor.logo} width="auto"
                                                         height={getSponsorHeight(sponsor.level)}/>
                                                </a>
                                            </Grid>)}
                                    </Grid>
                                </div>}

                                {sponsorsLevel3.length > 0 && <div style={{
                                    alignItems: "center",
                                    width: "95%",
                                    height: "auto",
                                    marginLeft: '2.5%',
                                    marginTop: 200
                                }}>
                                    <Grid container spacing={2}
                                          sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>
                                        {sponsorsLevel3.map((sponsor) =>
                                            <Grid item xs={4} sx={{
                                                mx: "auto",
                                                textAlign: "center",
                                                height: getSponsorHeight(sponsor.level) + 10
                                            }}
                                                  key={sponsor.name}>
                                                <a rel="noreferrer noopener" target="_blank"
                                                   href={sponsor.website}
                                                   style={{color: '#000000'}}>
                                                    <img src={sponsor.logo} width="auto"
                                                         height={getSponsorHeight(sponsor.level)}/>
                                                </a>
                                            </Grid>)}
                                    </Grid>
                                </div>}


                                {sponsorsLevel4.length > 0 && <div style={{
                                    alignItems: "center",
                                    width: "95%",
                                    height: "auto",
                                    marginLeft: '2.5%',
                                    marginTop: 200
                                }}>
                                    <Grid container spacing={2}
                                          sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>
                                        {sponsorsLevel4.map((sponsor) =>
                                            <Grid item xs={4} sx={{
                                                mx: "auto",
                                                textAlign: "center",
                                                height: getSponsorHeight(sponsor.level) + 10
                                            }}
                                                  key={sponsor.name}>
                                                <a rel="noreferrer noopener" target="_blank"
                                                   href={sponsor.website}
                                                   style={{color: '#000000'}}>
                                                    <img src={sponsor.logo} width="auto"
                                                         height={getSponsorHeight(sponsor.level)}/>
                                                </a>
                                            </Grid>)}
                                    </Grid>
                                </div>}

                                {sponsorsLevel5.length > 0 && <div style={{
                                    alignItems: "center",
                                    width: "95%",
                                    height: "auto",
                                    marginLeft: '2.5%',
                                    marginTop: 200
                                }}>
                                    <Grid container spacing={2}
                                          sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>
                                        {sponsorsLevel5.map((sponsor) =>
                                            <Grid item xs={4} sx={{
                                                mx: "auto",
                                                textAlign: "center",
                                                height: getSponsorHeight(sponsor.level) + 10
                                            }}
                                                  key={sponsor.name}>
                                                <a rel="noreferrer noopener" target="_blank"
                                                   href={sponsor.website}
                                                   style={{color: '#000000'}}>
                                                    <img src={sponsor.logo} width="auto"
                                                         height={getSponsorHeight(sponsor.level)}/>
                                                </a>
                                            </Grid>)}
                                    </Grid>
                                </div>}
                                {sponsorsLevel6.length > 0 && <div style={{
                                    alignItems: "center",
                                    width: "95%",
                                    height: "auto",
                                    marginLeft: '2.5%',
                                    marginTop: 200
                                }}>
                                    <Grid container spacing={2}
                                          sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>
                                        {sponsorsLevel6.map((sponsor) =>
                                            <Grid item xs={2} sx={{
                                                mx: "auto",
                                                textAlign: "center",
                                                height: getSponsorHeight(sponsor.level) + 10
                                            }}
                                                  key={sponsor.name}>
                                                <a rel="noreferrer noopener" target="_blank"
                                                   href={sponsor.website}
                                                   style={{color: '#000000'}}>
                                                    <img src={sponsor.logo} width="auto"
                                                         height={getSponsorHeight(sponsor.level)}/>
                                                </a>
                                            </Grid>)}
                                    </Grid>
                                </div>}
                                {sponsorsLevel7.length > 0 && <div style={{
                                    alignItems: "center",
                                    width: "95%",
                                    height: "auto",
                                    marginLeft: '2.5%',
                                    marginTop: 200
                                }}>
                                    <Grid container spacing={2}
                                          sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>
                                        {sponsorsLevel7.map((sponsor) =>
                                            <Grid item xs={2} sx={{
                                                mx: "auto",
                                                textAlign: "center",
                                                height: getSponsorHeight(sponsor.level) + 10
                                            }}
                                                  key={sponsor.name}>
                                                <a rel="noreferrer noopener" target="_blank"
                                                   href={sponsor.website}
                                                   style={{color: '#000000'}}>
                                                    <img src={sponsor.logo} width="auto"
                                                         height={getSponsorHeight(sponsor.level)}/>
                                                </a>
                                            </Grid>)}
                                    </Grid>
                                </div>}

                            </div>
                        </Paper>


                    </div>

                </div>}


            {/*-----------------SMALL SCREEN-------------------------*/}


            {!isScreenBig &&
                <div>

                    <Paper sx={{width: '100%', height: 'auto'}}>

                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            width: "95%",
                            height: 'auto',
                            marginLeft: '2.5%',
                            paddingTop:10,
                            paddingBottom:10
                        }}>


                            <Typography variant="h3" sx={{marginLeft:'20%'}}>

                                Mentors

                            </Typography>

                        </div>

                    </Paper>


                    <Paper sx={{width: '100%', height: 300}}>


                        <div style={{
                            display: 'flex',
                            alignItems: "center",
                            width: "95%",
                            height: 110,
                            marginLeft: '2.5%',
                            marginTop: 0
                        }}>
                            <img src="/images/supporters/noble.JPG" alt="Joel Noble" width="auto" height="100"/>
                            <Typography variant="h5" sx={{marginLeft: 5, marginRight: 5}}>
                                Joel Noble
                            </Typography>
                        </div>
                        <Typography variant="h6" sx={{marginLeft: 1}}>
                            Joel Noble is the founding mentor of the team, and has been the lead mentor
                            since the
                            team started around 2004. He plays a crucial role in keeping Angelbotics
                            operational,
                            and is an amazing person.
                        </Typography>
                    </Paper>


                    <Paper sx={{width: '100%', height: 300, marginTop: 2}}>
                        <div style={{
                            display: 'flex',
                            alignItems: "center",
                            width: "95%",
                            height: 110,
                            marginLeft: '2.5%',
                            marginTop: 0
                        }}>
                            <img src="" alt="Carol Layng" width="auto" height="100"/>
                            <Typography variant="h5" sx={{marginLeft: 5, marginRight: 5}}>
                                Carol Layng
                            </Typography>
                        </div>
                        <Typography variant="h6" sx={{marginLeft: 1}}>
                            Carol specializes in strategy, and contributes to scouting. She also does a ton of
                            planning, and ensures that the team will be able to compete.
                        </Typography>
                    </Paper>
                    <Paper sx={{width: '100%', height: 300, marginTop: 2, marginBottom: 5}}>
                        <div style={{
                            display: 'flex',
                            alignItems: "right",
                            width: "95%",
                            height: 110,
                            marginLeft: '2.5%'

                        }}>
                            <img src="" alt="Chad B" width="auto" height="100"/>
                            <Typography variant="h5" sx={{marginLeft: 5, marginRight: 5}}>
                                Chad B
                            </Typography>
                        </div>
                        <Typography variant="h6" sx={{marginLeft: 1}}>
                            Chad mentors our Programming and Electrical sub-teams. He helps diagnose issues
                            with the electrical, and helps brainstorm about the concept behind the code.
                        </Typography>
                    </Paper>


                    <Paper sx={{width: '100%', height: "auto"}}>
                        <Typography variant="h2" sx={{marginLeft: "15%"}}>
                            Sponsors
                        </Typography>


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
                                            <img src={sponsor.logo} width={getSponsorWidthMobile(sponsor.level)}
                                                 height={"auto"}/>
                                        </a>
                                    </Grid>)}
                            </Grid>
                        </div>}

                        {sponsorsLevel2.length > 0 && <div style={{
                            alignItems: "center",
                            width: "95%",
                            height: "auto",
                            marginLeft: '2.5%',
                            marginTop: 200
                        }}>
                            <Grid container spacing={2} sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>
                                {sponsorsLevel2.map((sponsor) =>
                                    <Grid item xs={12} sx={{mx: "auto", textAlign: "center", height: "auto"}}
                                          key={sponsor.name + "_mobile"}>
                                        <a rel="noreferrer noopener" target="_blank"
                                           href={sponsor.website}
                                           style={{color: '#000000'}}>
                                            <img src={sponsor.logo} width={getSponsorWidthMobile(sponsor.level)}
                                                 height={"auto"}/>
                                        </a>
                                    </Grid>)}
                            </Grid>
                        </div>}

                        {sponsorsLevel3.length > 0 && <div style={{
                            alignItems: "center",
                            width: "95%",
                            height: "auto",
                            marginLeft: '2.5%',
                            marginTop: 200
                        }}>
                            <Grid container spacing={2} sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>
                                {sponsorsLevel3.map((sponsor) =>
                                    <Grid item xs={8} sx={{mx: "auto", textAlign: "center", height: "auto"}}
                                          key={sponsor.name + "_mobile"}>
                                        <a rel="noreferrer noopener" target="_blank"
                                           href={sponsor.website}
                                           style={{color: '#000000'}}>
                                            <img src={sponsor.logo} width={getSponsorWidthMobile(sponsor.level)}
                                                 height={"auto"}/>
                                        </a>
                                    </Grid>)}
                            </Grid>
                        </div>}


                        {sponsorsLevel4.length > 0 && <div style={{
                            alignItems: "center",
                            width: "95%",
                            height: "auto",
                            marginLeft: '2.5%',
                            marginTop: 200
                        }}>
                            <Grid container spacing={2} sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>
                                {sponsorsLevel4.map((sponsor) =>
                                    <Grid item xs={6} sx={{mx: "auto", textAlign: "center", height: "auto"}}
                                          key={sponsor.name + "_mobile"}>
                                        <a rel="noreferrer noopener" target="_blank"
                                           href={sponsor.website}
                                           style={{color: '#000000'}}>
                                            <img src={sponsor.logo} width={getSponsorWidthMobile(sponsor.level)}
                                                 height={"auto"}/>
                                        </a>
                                    </Grid>)}
                            </Grid>
                        </div>}

                        {sponsorsLevel5.length > 0 && <div style={{
                            alignItems: "center",
                            width: "95%",
                            height: "auto",
                            marginLeft: '2.5%',
                            marginTop: 200
                        }}>
                            <Grid container spacing={2} sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>
                                {sponsorsLevel5.map((sponsor) =>
                                    <Grid item xs={6} sx={{mx: "auto", textAlign: "center", height: "auto"}}
                                          key={sponsor.name + "_mobile"}>
                                        <a rel="noreferrer noopener" target="_blank"
                                           href={sponsor.website}
                                           style={{color: '#000000'}}>
                                            <img src={sponsor.logo} width={getSponsorWidthMobile(sponsor.level)}
                                                 height={"auto"}/>
                                        </a>
                                    </Grid>)}
                            </Grid>
                        </div>}

                        {sponsorsLevel6.length > 0 && <div style={{
                            alignItems: "center",
                            width: "95%",
                            height: "auto",
                            marginLeft: '2.5%',
                            marginTop: 200
                        }}>
                            <Grid container spacing={2} sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>
                                {sponsorsLevel6.map((sponsor) =>
                                    <Grid item xs={4} sx={{mx: "auto", textAlign: "center", height: "auto"}}
                                          key={sponsor.name + "_mobile"}>
                                        <a rel="noreferrer noopener" target="_blank"
                                           href={sponsor.website}
                                           style={{color: '#000000'}}>
                                            <img src={sponsor.logo} width={getSponsorWidthMobile(sponsor.level)}
                                                 height={"auto"}/>
                                        </a>
                                    </Grid>)}
                            </Grid>
                        </div>}

                        {sponsorsLevel7.length > 0 && <div style={{
                            alignItems: "center",
                            width: "95%",
                            height: "auto",
                            marginLeft: '2.5%',
                            marginTop: 200
                        }}>
                            <Grid container spacing={2} sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>
                                {sponsorsLevel7.map((sponsor) =>
                                    <Grid item xs={4} sx={{mx: "auto", textAlign: "center", height: "auto"}}
                                          key={sponsor.name + "_mobile"}>
                                        <a rel="noreferrer noopener" target="_blank"
                                           href={sponsor.website}
                                           style={{color: '#000000'}}>
                                            <img src={sponsor.logo} width={getSponsorWidthMobile(sponsor.level)}
                                                 height={"auto"}/>
                                        </a>
                                    </Grid>)}
                            </Grid>
                        </div>}

                    </Paper>


                </div>
            }


        </div>
    );


}