import React from "react";
import courseimg from "./Asset/courseimage.jpg";
import Logo from './Asset/logo.png';
import axios from "axios";
 function Mern() {
  const mycourse = 'Mernstack';
  const openrazorpay = (data)=>{
    const options = {
     key:'rzp_test_j9y9J7mpIATZVk',
     amount:Number(data.amount),
     currency:data.currency,
     name:'Coding-learner',
     order_id:data.id,
     image:Logo,
     handler:async function(response){
      let res = await axios.post('https://education-backend-eight.vercel.app/razorpayorder/verify',{response})
      if(res.data === 'sign valid')
       console.log(res.data)
        await axios.post('https://education-backend-eight.vercel.app/course/mycourse?name='+mycourse+'&email='+localStorage.getItem('token'))
       alert('Congratulation,You have purchased Mernstack successfully');
     }
    };
    var rzp1 = new  window.Razorpay(options);
    rzp1.open();
  }
   async function handlepayment(amount){
    console.log('token:'+localStorage.getItem('token'));
    let data1  =  await axios.get('https://education-backend-eight.vercel.app/home/data',{
      headers: {
          "mytoken":localStorage.getItem('token'),
        },
      })
    if(data1.data.name){
      console.log(data1.data.name)
      let data = await axios.post('https://education-backend-eight.vercel.app/razorpayorder/order?',{
        amount:amount,
       
        })
       openrazorpay(data.data)
      console.log(data);
    }
    else{
      alert('You are not exist ,please register now')
    }
   
   
   }
  return (
    <>
      <center>
      <div className="coursecard Mern" >
        <div className="courseimage">
          <img className="courseimg" src={courseimg} alt="courseimage" />
        </div>
        <h1 className="hcoursename">Mern stack web development</h1>
        <p className="haboutcourse">In this course you will learn Mongodb Express.js React.js Node.js Javascript HTML5 CSS3</p>

        <div className="prize">
          <div><i class="fa-solid fa-indian-rupee-sign"></i>199</div>
          <div className="paybtn" onClick={()=>handlepayment(199)}>Pay now</div>
          
        </div>
      </div>
      <div className="certificate">
      <h1 className="hcertificate">Become a Certified developer</h1>
      <div className="certificateimg">

      </div>
      </div>
      
      
      </center>
     
    </>
  );
}

export default Mern;
