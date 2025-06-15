import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
function Mytopic(props){
    const [link, setlink] = useState('');
    useEffect(()=>{
    getlink();
    })
   async function getlink(){
    const data = await axios.get(`https://education-backend-eight.vercel.app/allvideo/mycourses/${props.data}/${props.topicname}`)
    setlink(data.data);
   }
    return (
      
       <ReactPlayer url={link}  controls={true} width = "100%"  />
      
    )
}
export default Mytopic;