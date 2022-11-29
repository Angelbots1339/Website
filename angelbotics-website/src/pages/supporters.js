import {Grid, Paper, Typography} from "@mui/material";
import {useEffect, useState} from "react";

export default function Supporters() {

    const [isScreenBig, setScreenBig] = useState(false);

    useEffect(() => {
        setScreenBig(window.innerWidth > 800);
    }, []);


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
    const sponsorsLevel6 = supportersJSON.Sponsors.map((sponsor) => {
        if (sponsor.level === 6) return sponsor;
    }).filter(Boolean);
    const sponsorsLevel7 = supportersJSON.Sponsors.map((sponsor) => {
        if (sponsor.level === 7) return sponsor;
    }).filter(Boolean);

    function getSponsorHeight(level) {
        if (level === 1) return 250;
        if (level === 2) return 200;
        if (level === 3) return 100;
        if (level === 4) return 100;
        if (level === 5) return 80;
        if (level === 6) return 70;
        if (level === 7) return 70;
    }


    return (
        <div>

            <Paper sx={{width: '100%', height: 'auto', marginBottom:5, boxShadow:5}}>

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

            <Grid container spacing={2}
                  sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>
                {supportersJSON.mentors.map((mentor) =>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{
                        mx: "auto",
                        textAlign: "center",
                        height: "auto"
                    }}
                          key={mentor.name}>
                        <Paper sx={{width: '100%', height: "100%", boxShadow:5}}>
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
                                        <img src={mentor.imagePath} alt={mentor.name} width="auto" height="200" style={{borderRadius:15, marginTop:10}}/>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} lg={7} xl={7} sx={{
                                        mx: "auto",
                                        textAlign: "center",
                                        height: "auto"
                                    }}
                                          key={mentor.name}>
                                        <div>
                                            <Typography variant="h4" sx={{ mb: 2, mt:2}}>
                                                {mentor.name}
                                            </Typography>
                                            <Typography variant="h6" sx={{ mb: 10}}>
                                                {mentor.description}
                                            </Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Paper>
                    </Grid>)}
            </Grid>



            {isScreenBig &&
                <div>
                    <div style={{
                        alignItems: "center",
                        width: "95%",
                        height: "auto",
                        marginLeft: '2.5%',
                        marginTop: 50
                    }}>

                        <Paper sx={{width: '100%', height: "auto", boxShadow:5}}>

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
                                                         height={getSponsorHeight(sponsor.level)} alt={sponsor.name}/>
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
                                                         height={getSponsorHeight(sponsor.level)} alt={sponsor.name}/>
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
                                                         height={getSponsorHeight(sponsor.level)} alt={sponsor.name}/>
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
                                                         height={getSponsorHeight(sponsor.level)} alt={sponsor.name}/>
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
                                                         height={getSponsorHeight(sponsor.level)} alt={sponsor.name}/>
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
                                            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={{
                                                mx: "auto",
                                                textAlign: "center",
                                                height: getSponsorHeight(sponsor.level) + 10
                                            }}
                                                  key={sponsor.name}>
                                                <a rel="noreferrer noopener" target="_blank"
                                                   href={sponsor.website}
                                                   style={{color: '#000000'}}>
                                                    <img src={sponsor.logo} width="auto"
                                                         height={getSponsorHeight(sponsor.level)} alt={sponsor.name}/>
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
                                            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={{
                                                mx: "auto",
                                                textAlign: "center",
                                                height: getSponsorHeight(sponsor.level) + 10
                                            }}
                                                  key={sponsor.name}>
                                                <a rel="noreferrer noopener" target="_blank"
                                                   href={sponsor.website}
                                                   style={{color: '#000000'}}>
                                                    <img src={sponsor.logo} width="auto"
                                                         height={getSponsorHeight(sponsor.level)} alt={sponsor.name}/>
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
                    <Paper sx={{width: '100%', height: "auto", marginTop:10}}>
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
                                            <img src={sponsor.logo} width={"100%"}
                                                 height={"auto"} alt={sponsor.name}/>
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
                                            <img src={sponsor.logo} width={"100%"}
                                                 height={"auto"} alt={sponsor.name}/>
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
                                            <img src={sponsor.logo} width={"100%"}
                                                 height={"auto"} alt={sponsor.name}/>
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
                                            <img src={sponsor.logo} width={"100%"}
                                                 height={"auto"} alt={sponsor.name}/>
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
                                            <img src={sponsor.logo} width={"100%"}
                                                 height={"auto"} alt={sponsor.name}/>
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
                                            <img src={sponsor.logo} width={"100%"}
                                                 height={"auto"} alt={sponsor.name}/>
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