import {useEffect, useState} from "react";
import {Paper} from "@mui/material";


export default function Contact() {


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

                <div style={{display: "flex", alignItems: "center", width: "95%", height: 700, marginLeft:'2.5%'}}>


                    <Paper sx={{width:'80%', height:400}}>



                    </Paper>


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
