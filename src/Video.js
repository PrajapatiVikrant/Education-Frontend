
import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import Web from './Webdevelopment';
import Videoname from './Topic'


function CourseVideo() {
 
  
  const [course,setcourse] = useState([]);
  const [videopage,setvideopage] = useState('');
  useEffect(()=>{
    mycourse();
  })
  
    
   
     
      
  async function getdata(topicname){
    const data = await axios.get('https://education-backend-eight.vercel.app/know/visitdata/'+localStorage.getItem('email'));
   setcourse(()=>{
  
    return <Videoname data = {data.data} topicname = {topicname}/>
   })
  }
  async function mycourse(){
    const data = await axios.get('https://education-backend-eight.vercel.app/know/visitdata/'+localStorage.getItem('email'));
    console.log(data)
    if(data.data === 'Pythonbackend'){
      
      setvideopage(()=>{
        return (
          
          <div className="topicctn">
           
             {Web.Python_Django.map((elem,ind)=>{
               return <div className="topicname" onClick={()=>getdata(elem)}>{elem}</div>
             })}
            
          </div>
     
        )
      })
     
    }else if(data.data === 'Mernstack'){
      setvideopage(()=>{
        return (
         
          <div className="topicctn">
           
             {Web.Fullstack.map((elem,ind)=>{
               return <div className="topicname" onClick={()=>getdata(elem)}>{elem}</div>
             })}
            
          </div>
     
        )
      })
    }
  }
        
  return (
    <>
   <div className="coursectn">
    <div className="videoctn"> <center>{course}</center> </div>
    {videopage}
    </div>
    
      


      
    
    </>
  );
}
export default CourseVideo;
