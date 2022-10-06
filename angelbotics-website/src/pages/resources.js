import {useEffect, useState} from "react";
import {Card, Paper, Typography} from "@mui/material";
import {ReactEmbeddedGoogleCalendar} from "react-embedded-google-calendar";

const resourcesJSON = require('./json/resources.json');


export default function Resources() {


    // This code can be used for variable size on mobile vs desktop
    //
    //
    const [isScreenBig, setScreenBig] = useState(false);


    useEffect(() => {

        setScreenBig(window.innerWidth > 1200);

    }, []);

    return (

        <div>


            {/*----------Big Screens----------*/}

            {isScreenBig &&

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    width: "95%",
                    height: 2000,
                    marginLeft: '2.5%',
                    marginTop: 100
                }}>


                    <Paper sx={{width: '100%', height: 2000}}>


                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            width: "95%",
                            height: 700,
                            marginLeft: '2.5%',
                            marginTop: 0
                        }}>

                            <Card sx={{height: 600, width: "50%", m: 3}}>

                                <div style={{
                                    alignItems: "center",
                                    width: "90%",
                                    height: "auto",
                                    marginLeft: '5%',
                                    marginTop: 20
                                }}>


                                    <Typography variant='h1' sx={{}}>

                                        Contact Us
                                    </Typography>

                                    <Typography variant='h5' sx={{marginTop: 5}}>

                                        {"Reach out to us at any time through "}
                                        <a href='mailto:angelbots1339@gmail.com' style={{color: '#000000'}}>
                                            Angelbots1339@gmail.com
                                        </a>
                                        {" or through any social media platform."}

                                    </Typography>

                                    <Typography variant='h4' sx={{marginTop: 5}}>


                                        <a rel="noreferrer noopener" target="_blank"
                                           href={'https://www.instagram.com/angelbots1339/'}>
                                            <img src="/images/resources/instagramLogo.png" alt="Instagram Link Image"
                                                 width="30%"
                                                 height="auto"/>
                                        </a>

                                    </Typography>

                                    {/*Open Alliance Link: https://www.chiefdelphi.com/t/the-open-alliance-is-officially-open-to-all-teams/397951 */}

                                </div>

                            </Card>

                            <Card sx={{height: 600, width: "50%", m: 3}}>

                                <div style={{
                                    alignItems: "center",
                                    width: "90%",
                                    height: "auto",
                                    marginLeft: '5%',
                                    marginTop: 20
                                }}>

                                    <a rel="noreferrer noopener" target="_blank"
                                       href={"https://github.com/Angelbots1339"}>
                                        <img src="/images/resources/GitHub_Logo.png" alt="Github Logo" width="100%"
                                             height="auto"/>
                                    </a>


                                    <Typography variant='h5'>
                                        We make all of our code publicly visible on GitHub. You can find the latest
                                        version
                                        of any code we have on our  <a rel="noreferrer noopener" target="_blank"
                                                                       href={"https://github.com/Angelbots1339"}>GitHub Organization page</a>.
                                    </Typography>

                                    {/*Open Alliance Link: https://www.chiefdelphi.com/t/the-open-alliance-is-officially-open-to-all-teams/397951 */}

                                </div>

                            </Card>

                        </div>


                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            width: "95%",
                            height: 700,
                            marginLeft: '2.5%',
                            marginTop: 0
                        }}>

                            <Card sx={{height: 600, width: "50%", m: 3}}>

                                <div style={{
                                    alignItems: "center",
                                    width: "90%",
                                    height: "auto",
                                    marginLeft: '5%',
                                    marginTop: 20
                                }}>
                                    <a rel="noreferrer noopener" target="_blank"
                                       href={"https://www.chiefdelphi.com/t/the-open-alliance-is-officially-open-to-all-teams/397951"}>
                                        <h1>The Open Alliance</h1>
                                    </a>

                                    <Typography variant='h5' sx={{}}>
                                        Angelbotics is a member of the Open Alliance, which is a group of teams that
                                        have
                                        agreed
                                        to share all information about their robot, and essentially make it open source.
                                        The
                                        goal
                                        of this group is to create a place for teams to go when they need help, and to
                                        improve
                                        everyone's robot through the sharing of ideas.
                                    </Typography>

                                    {/*Open Alliance Link: https://www.chiefdelphi.com/t/the-open-alliance-is-officially-open-to-all-teams/397951 */}

                                </div>

                            </Card>

                            <Card sx={{height: 600, width: "50%", m: 3}}>

                                <div style={{
                                    alignItems: "center",
                                    width: "90%",
                                    height: "auto",
                                    marginLeft: '5%',
                                    marginTop: 20
                                }}>

                                    <a rel="noreferrer noopener" target="_blank"
                                       href={"https://www.thebluealliance.com/team/1339"}>
                                        <img src="/images/resources/TBALogo.jpg" alt="The Blue Alliance Logo"
                                             width="100%"
                                             height="auto"/>
                                    </a>


                                    <Typography variant='h5' sx={{mt:5}}>
                                        <a rel="noreferrer noopener" target="_blank"
                                           href={"https://www.thebluealliance.com/team/1339"}>The Blue Alliance</a> is a website that displays a ton of data about FRC. You can
                                        find information and statistics on individual competitions, teams, and even matches.
                                    </Typography>

                                    {/*Open Alliance Link: https://www.chiefdelphi.com/t/the-open-alliance-is-officially-open-to-all-teams/397951 */}

                                </div>

                            </Card>

                        </div>

                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            width: "95%",
                            height: 600,
                            marginLeft: '2.5%',
                            marginTop: 0
                        }}>
                        <Card sx={{height: 550, width: "100%", m: 3}}>

                            <div style={{
                                alignItems: "center",
                                width: "90%",
                                height: "auto",
                                marginLeft: '5%',
                                marginTop: 20
                            }}>


                        <ReactEmbeddedGoogleCalendar publicUrl ={resourcesJSON.googleCalendarPublicLink} height = '500px' width = "100%"/>

                            </div>
                        </Card>
                        </div>
                    </Paper>


                </div>

            }


            {/*----------Small Screens----------*/}

            {!isScreenBig &&

                <div style={{display: "flex", alignItems: "center", width: "100", height: "auto"}}>

                    <Paper sx={{width: '100%', height: 2600}}>


                        <div style={{
                            alignItems: "center",
                            width: "95%",
                            height: 1500,
                            marginLeft: '2.5%',
                            marginTop: 0
                        }}>

                            <Card sx={{height: "auto", width: "100%", marginTop:5, marginBottom:5}}>
                                <div style={{
                                    alignItems: "center",
                                    width: "90%",
                                    height: "auto",
                                    marginLeft: '5%',
                                    marginTop: 20
                                }}>


                                    <Typography variant='h2' sx={{}}>

                                        Contact Us
                                    </Typography>

                                    <Typography variant='h5' sx={{marginTop: 5}}>

                                        {"Reach out to us at any time through "}
                                        <a href='mailto:angelbots1339@gmail.com' style={{color: '#000000'}}>
                                            Angelbots1339@gmail.com
                                        </a>
                                        {" or through any social media platform."}

                                    </Typography>

                                    <Typography variant='h4' sx={{marginTop: 5}}>


                                        <a rel="noreferrer noopener" target="_blank"
                                           href={'https://www.instagram.com/angelbots1339/'}>
                                            <img src="/images/resources/instagramLogo.png" alt="Instagram Link Image"
                                                 width="30%"
                                                 height="auto"/>
                                        </a>

                                    </Typography>

                                    {/*Open Alliance Link: https://www.chiefdelphi.com/t/the-open-alliance-is-officially-open-to-all-teams/397951 */}

                                </div>

                            </Card>

                            <Card sx={{height: "auto", width: "100%", marginTop:5, marginBottom:5}}>
                                <div style={{
                                    alignItems: "center",
                                    width: "90%",
                                    height: "auto",
                                    marginLeft: '5%',
                                    marginTop: 20
                                }}>

                                    <a rel="noreferrer noopener" target="_blank"
                                       href={"https://github.com/Angelbots1339"}>
                                        <img src="/images/resources/GitHub_Logo.png" alt="Github Logo" width="100%"
                                             height="auto"/>
                                    </a>


                                    <Typography variant='h5'>
                                        We make all of our code publicly visible on GitHub. You can find the latest
                                        version
                                        of any code we have on our  <a rel="noreferrer noopener" target="_blank"
                                                                       href={"https://github.com/Angelbots1339"}>GitHub Organization page</a>.
                                    </Typography>


                                </div>
                                </Card>


                            <Card sx={{height: "auto", width: "100%", marginTop:5, marginBottom:5}}>
                                <div style={{
                                    alignItems: "center",
                                    width: "90%",
                                    height: "auto",
                                    marginLeft: '5%',
                                    marginTop: 20
                                }}>

                                    <a rel="noreferrer noopener" target="_blank"
                                       href={"https://www.chiefdelphi.com/t/the-open-alliance-is-officially-open-to-all-teams/397951"}>
                                        <h1>The Open Alliance</h1>
                                    </a>

                                    <Typography variant='h5' sx={{}}>
                                        Angelbotics is a member of the Open Alliance, which is a group of teams that
                                        have
                                        agreed
                                        to share all information about their robot, and essentially make it open source.
                                        The
                                        goal
                                        of this group is to create a place for teams to go when they need help, and to
                                        improve
                                        everyone's robot through the sharing of ideas.
                                    </Typography>


                                </div>
                            </Card>

                            <Card sx={{height: "auto", width: "100%", marginTop:5, marginBottom:5}}>
                                <div style={{
                                    alignItems: "center",
                                    width: "90%",
                                    height: "auto",
                                    marginLeft: '5%',
                                    marginTop: 20
                                }}>

                                    <a rel="noreferrer noopener" target="_blank"
                                       href={"https://www.thebluealliance.com/team/1339"}>
                                        <img src="/images/resources/TBALogo.jpg" alt="The Blue Alliance Logo"
                                             width="100%"
                                             height="auto"/>
                                    </a>


                                    <Typography variant='h5' sx={{mt:5}}>
                                        <a rel="noreferrer noopener" target="_blank"
                                           href={"https://www.thebluealliance.com/team/1339"}>The Blue Alliance</a> is a website that displays a ton of data about FRC. You can
                                        find information and statistics on individual competitions, teams, and even matches.
                                    </Typography>


                                </div>
                            </Card>




                            <Card sx={{height: "auto", width: "100%", marginTop:5, marginBottom:5}}>
                                <div style={{
                                    alignItems: "center",
                                    width: "90%",
                                    height: "auto",
                                    marginLeft: '5%',
                                    marginTop: 20
                                }}>
                                    <a rel="noreferrer noopener" target="_blank"
                                       href={"https://www.thebluealliance.com/team/1339"}>
                                        <Typography variant='h5' sx={{mt:5}}>
                                            Calendar
                                        </Typography>
                                    </a>
                                        <ReactEmbeddedGoogleCalendar publicUrl ={resourcesJSON.googleCalendarPublicLink} height = '400px' width = "100%"/>
                                </div>
                            </Card>





                        </div>


                    </Paper>

                </div>

            }


        </div>

    );
}
