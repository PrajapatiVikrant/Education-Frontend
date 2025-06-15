import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"

function Courses() {
  useEffect(() => {
    getdata();
  });
  const [mycart, setmycart] = useState([]);
  const navigate = useNavigate();

  async function getdata() {
    let data = await axios.get(
      "https://education-backend-eight.vercel.app/getcourse/" +
        localStorage.getItem("token")
    );
    if (data.data.message === "success") {
      setmycart(data.data.course);
    }
  }
 async function start(name){
   let data = await axios.post('https://education-backend-eight.vercel.app/visit/name?name='+name+'&token='+localStorage.getItem('token'))
   if(data.data === 'success'){
    navigate('/allvideo')
   
   }
 }
  return (
    <>
      {mycart.map((elem, ind) => {
        return (
          <center>
            <div className="startcard">
              <h1 className="coursename">{elem}</h1>
              <p className="haboutcourse">
                In this course you will cover both frontend and backend.And after this course you can crack any interview of web development
              </p>
              <center>
                <button className="startwatching" onClick={()=>start(elem)}>Start watching</button>
              </center>
            </div>
          </center>
        );
      })}
    </>
  );
}
export default Courses;
