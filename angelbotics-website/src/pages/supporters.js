import {Grid, Paper, Typography} from "@mui/material";
import sponsorsJSON from "./sponsors.json";

export default function Supporters() {


    const sponsorsJSON = require('./sponsors.json');

    const sponsorsLevel1 = sponsorsJSON.Sponsors.map((sponsor) => {
        if (sponsor.level === 1) return sponsor;
        return;
    }).filter(Boolean);

    const sponsorsLevel2 = sponsorsJSON.Sponsors.map((sponsor) => {
        if (sponsor.level === 2) return sponsor;
        return;
    }).filter(Boolean);

    const sponsorsLevel3 = sponsorsJSON.Sponsors.map((sponsor) => {
        if (sponsor.level === 3) return sponsor;
        return;
    }).filter(Boolean);

    const sponsorsLevel4 = sponsorsJSON.Sponsors.map((sponsor) => {
        if (sponsor.level === 4) return sponsor;
        return;
    }).filter(Boolean);

    const sponsorsLevel5 = sponsorsJSON.Sponsors.map((sponsor) => {
        if (sponsor.level === 5) return sponsor;
        return;
    }).filter(Boolean);

    const sponsorsLevel6 = sponsorsJSON.Sponsors.map((sponsor) => {
        if (sponsor.level === 6) return sponsor;
        return;
    }).filter(Boolean);

    const sponsorsLevel7 = sponsorsJSON.Sponsors.map((sponsor) => {
        if (sponsor.level === 7) return sponsor;
        return;
    }).filter(Boolean);

    const sortedSponsorArray = [sponsorsLevel1, sponsorsLevel2, sponsorsLevel3, sponsorsLevel4, sponsorsLevel5, sponsorsLevel6, sponsorsLevel7];


    function getSponsorHeight(level) {
        if(level === 1) return 250;
        if(level === 2) return 200;
        if(level === 3) return 100;
        if(level === 4) return 100;
        if(level === 5) return 80;
        if(level === 6) return 50;
        if(level === 7) return 50;
    }

    return (
        <div>

            <div style={{
                display: "flex",
                alignItems: "center",
                width: "95%",
                height: 250,
                marginLeft: '2.5%',
                marginTop: 30
            }}>


                <Paper sx={{width: '50%', height: 250}}>
                    <div style={{
                        display: 'flex',
                        alignItems: "center",
                        width: "95%",
                        height: 250,
                        marginLeft: '2.5%',
                        marginTop: 0
                    }}>
                        <img src="/images/supporters/noble.JPG" alt="Joel Noble" width="auto" height="200"/>

                        <div>
                            <Typography variant="h4" sx={{marginLeft: '30%', marginBottom: 5}}>
                                Joel Noble

                            </Typography>
                            <Typography variant="h6" sx={{marginLeft: 5}}>
                                Joel Noble is the founding mentor of the team, and has been the lead mentor since the
                                team started around 2003. He plays a crucial role in keeping Angelbotics operational,
                                and is an amazing person.
                            </Typography>
                        </div>
                    </div>
                </Paper>


                <Paper sx={{width: '50%', height: 250, marginLeft: 2}}>
                    <div style={{
                        display: 'flex',
                        alignItems: "center",
                        width: "95%",
                        height: 250,
                        marginLeft: '2.5%',
                        marginTop: 0
                    }}>
                        <img src="/images/supporters/" alt="Carol L" width="auto" height="200"/>

                        <div>
                            <Typography variant="h4" sx={{marginLeft: '30%', marginBottom: 5}}>
                                Carol L

                            </Typography>
                            <Typography variant="h6" sx={{marginLeft: 5}}>
                                Carol is another mentor, and she specializes in strategy. She also does a ton of
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
                height: 250,
                marginLeft: '2.5%',
                marginTop: 30
            }}>


                <Paper sx={{width: '50%', height: 250}}>
                    <div style={{
                        display: 'flex',
                        alignItems: "center",
                        width: "95%",
                        height: 250,
                        marginLeft: '2.5%',
                        marginTop: 0
                    }}>
                        <img src="/images/supporters/" alt="Chad B" width="auto" height="200"/>

                        <div>
                            <Typography variant="h4" sx={{marginLeft: '30%', marginBottom: 5}}>
                                Chad B

                            </Typography>
                            <Typography variant="h6" sx={{marginLeft: 5}}>
                                Chad mentors our Programming and Electrical sub-teams. He helps diagnose issues with the
                                electrical, and helps brainstorm about the concept behind the code.
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
                height: 2000,
                marginLeft: '2.5%',
                marginTop: 50
            }}>

                <Paper sx={{width: '100%', height: 2000}}>
                    <Typography variant="h1" sx={{marginLeft: "40%"}}>
                        Sponsors
                    </Typography>

                    <div style={{
                        alignItems: "center",
                        width: "95%",
                        height: "auto",
                        marginLeft: '2.5%',
                        marginTop: 50
                    }}>





                        <Grid container spacing={2} sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>



                        {sponsorsLevel1.map((sponsor) =>
                            <Grid item xs={4} sx={{mx: "auto", textAlign: "center", height: 90}} key={sponsor}>
                                <a rel="noreferrer noopener" target="_blank"
                                   href={sponsor.website}
                                   style={{color: '#000000'}}>
                                    <img src={sponsor.logo} width="auto" height={getSponsorHeight(sponsor.level)}/>
                                </a>
                            </Grid>)}
                    </Grid>
                    </div>

                    <div style={{
                        alignItems: "center",
                        width: "95%",
                        height: "auto",
                        marginLeft: '2.5%',
                        marginTop: 200
                    }}>
                    <Grid container spacing={2} sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>
                        {sponsorsLevel2.map((sponsor) =>
                            <Grid item xs={3} sx={{mx: "auto", textAlign: "center", height: 90}} key={sponsor}>
                                <a rel="noreferrer noopener" target="_blank"
                                   href={sponsor.website}
                                   style={{color: '#000000'}}>
                                    <img src={sponsor.logo} width="auto" height={getSponsorHeight(sponsor.level)}/>
                                </a>
                            </Grid>)}
                    </Grid>
                    </div>

                    <div style={{
                        alignItems: "center",
                        width: "95%",
                        height: "auto",
                        marginLeft: '2.5%',
                        marginTop: 200
                    }}>
                        <Grid container spacing={2} sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>
                            {sponsorsLevel3.map((sponsor) =>
                                <Grid item xs={3} sx={{mx: "auto", textAlign: "center", height: 90}} key={sponsor}>
                                    <a rel="noreferrer noopener" target="_blank"
                                       href={sponsor.website}
                                       style={{color: '#000000'}}>
                                        <img src={sponsor.logo} width="auto" height={getSponsorHeight(sponsor.level)}/>
                                    </a>
                                </Grid>)}
                        </Grid>
                    </div>


                    <div style={{
                        alignItems: "center",
                        width: "95%",
                        height: "auto",
                        marginLeft: '2.5%',
                        marginTop: 200
                    }}>
                        <Grid container spacing={2} sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>
                            {sponsorsLevel4.map((sponsor) =>
                                <Grid item xs={2} sx={{mx: "auto", textAlign: "center", height: 90}} key={sponsor}>
                                    <a rel="noreferrer noopener" target="_blank"
                                       href={sponsor.website}
                                       style={{color: '#000000'}}>
                                        <img src={sponsor.logo} width="auto" height={getSponsorHeight(sponsor.level)}/>
                                    </a>
                                </Grid>)}
                        </Grid>
                    </div>

                    <div style={{
                        alignItems: "center",
                        width: "95%",
                        height: "auto",
                        marginLeft: '2.5%',
                        marginTop: 200
                    }}>
                        <Grid container spacing={2} sx={{width: '90%', marginLeft: '5%', marginRight: '5%'}}>
                            {sponsorsLevel5.map((sponsor) =>
                                <Grid item xs={2} sx={{mx: "auto", textAlign: "center", height: 90}} key={sponsor}>
                                    <a rel="noreferrer noopener" target="_blank"
                                       href={sponsor.website}
                                       style={{color: '#000000'}}>
                                        <img src={sponsor.logo} width="auto" height={getSponsorHeight(sponsor.level)}/>
                                    </a>
                                </Grid>)}
                        </Grid>
                    </div>


                </Paper>


            </div>


        </div>
    );


}