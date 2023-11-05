import React from 'react';
import './App.css';

import { Typewriter } from 'react-simple-typewriter'

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import Notesicon from './Asset/Notesicon.png'
import JobIcon from './Asset/jobicon.png'
import aboutimage from './Asset/about.jpg'
import courseimg from './Asset/courseimage.jpg'


function Home() {
 
  return (
  <>

<section className='welcomepage'>
<div className="wtext">
<div className="styletext"> <div className="welcome">Welcome to</div>Coding-learner</div> 

<div className="typeeffect">
<p className='Learn'>Learn </p>
<Typewriter 
words={['Frontend Development', 'Backend Development', 'FullStack Development']}
loop={Infinity}
cursor
cursorStyle='|'
typeSpeed={20}
deleteSpeed={20}
delaySpeed={2000}

/>

</div>
<p className="smalltext">An investment in knowlede pays the best  interest</p>
<div><a href="#course"> <button className='getstarted'>Get started</button></a></div>


</div>

</section>
<section className='CourseHighlights'>


<div className="highlightscontent">
  <div className='hitem'>
    <h2 className='highlightheading'>Life time access</h2><br /><br />
    <div className="hicon"><center><i className="icon fa-solid fa-timeline"></i></center></div>
    
    
    <p className='hightlightcontent'>Once you purchase a course, you'll have access for life,Code-learner provide your id by which you can access your course for life time</p>
  </div>
  <div className='hitem'>
  <h2 className='highlightheading'>Notes with Interview Q/A</h2>
  <div className="hicon"><center><i className='icon'><img src={Notesicon} alt="Notes" width='80px' height='80px' /></i></center></div>
  
 
  <p className="hightlightcontent">Coding-lerner provide full explained note and provide question answer for interview prepration</p>
  </div>
  <div className='hitem'>
  <h2 className='highlightheading'>Job ready Course</h2><br /><br />
  <div className="hicon"> <center><i className='icon'><img src={JobIcon} alt="Jobicon" width='80px' height='80px' /></i></center></div>
 
  <p className='hightlightcontent'>Coding-learner provide all basic and advance concept of coding .After this Code-learner's course you will crack any web development interviews </p>
  </div>
  
</div>
</section>

<section className="aboutpage">

<div className="about">
<div className="aimg"><img className='aboutimage' src={aboutimage} alt="aboutimage" /></div>
<div className="atext">
<h1 className='aboutheading'>About us</h1>
<h1 className='awelcomeheading'>Welcome to Coding-learner</h1>
<p className="ap">Coding-learner is online education platform where you can make our career in ultimate way.This platform provide certificate of each coding-learner'course</p>
 <br />

<p className="ap">You can start your journey with us .Coding-learner provide  ultimate course for your webdevelopment carrer</p>
<br />
<p className="ap">web categories</p>
<ul>
  <li>MERN STACK</li>
  
</ul>
</div>
</div>




</section>

<section className="coursedetailctn" id='course'>
<center>
<div className="courseheaing"><h1>Course</h1> </div>

<div className="coursedetail">
<Link className='courselink' to='/Mern'>
<div className="coursecard Mern" >
<div className="courseimage"><img className='courseimg' src={courseimg} alt="courseimage"  /></div>
 <h1 className='hcoursename'>Full stack web development</h1>
 <p className="haboutcourse">In this course you will learn Mongodb Express.js React.js Node.js Javascript HTML5 CSS3</p>
 <div className="prize"><div><i className="fa-solid fa-indian-rupee-sign"></i>199</div></div>
</div>
</Link>
<Link className='courselink' to='/python'>
<div className="coursecard python">
<div className="courseimage"><img className='courseimg' src={courseimg} alt="courseimage"  /></div>
 <h1 className='hcoursename'>Python with django</h1>
 <p className="haboutcourse">In this course you will learn python, django,flask</p>
 <div className="prize"><div><i className="fa-solid fa-indian-rupee-sign"></i>99</div></div>
</div>
</Link>



</div>
</center> 
</section>


<section className="testimonials">
<center>
  <div className="slider">
  <Carousel>
  <Carousel.Item>
  <div className="slide">
  </div>
    <Carousel.Caption>
    <img className='testmoialimage' src={aboutimage} alt="userimage"/>
    <h3>Ajit Singh</h3>
      <p>This course dramatically increased my knowledge about web development.</p>
   
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div className="slide">
  </div>

    <Carousel.Caption>
    <img className='testmoialimage' src={aboutimage} alt="userimage"/>
    <h3>Anjali Sharma</h3>
      <p>After completing this course . I started my freelancing Journey. Time and money spent5 on this course was totally worthit.</p>
   
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div className="slide">
  </div>
    <Carousel.Caption>
   <img className='testmoialimage' src={aboutimage} alt="userimage"/>
    <h3>Ankur Kumar</h3>
      <p>
        This course brought disciplinel to my life , helped me devlop  a coder's mindset and increase my concentration as well as time manaement skills..
      </p>
     
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </div>

</center>

</section> 
<section className="footer">
<div className="webname">Coding-lerner</div>
<div className="copyrighttext">@ 2023 Coding-learner.com</div>
<div className="contact">
  <div><i className="fa-brands fa-instagram"></i></div>
  <div> <i className="fa-brands fa-whatsapp"></i></div>
  <div> <i className="fa-brands fa-facebook-f"></i></div>




</div>





</section>
</>
  );
}

export default Home;