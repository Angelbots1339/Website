import ky from "ky";
import {useEffect, useState} from "react";



export default function InstagramPost() {

    const instagramRegExp = new RegExp(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/);



    const [photos, setPhotos] = useState();


    useEffect(() => {

        ky.get('http://localhost:8000/instagram').catch((e)=> {

            console.log(e);

        });



    }, []);


    return (

        <div>

            <p>  {photos} </p>

        </div>

    );

}

