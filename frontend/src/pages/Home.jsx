import React,{useState} from 'react'
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import BackgroundImage from "../assets/home2.jpg";
import MovieLogo from "../assets/homeTitle.webp";
import { useNavigate } from 'react-router-dom';
import {FaPlay} from "react-icons/fa";
import {AiOutlineInfoCircle} from "react-icons/ai"

const Home = () => {

  const [isScrolled,setIsScrolled] = useState(false);
  const navigate = useNavigate();
  window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
  }
  return (
 <>
 
 <Navbar isScrolled={isScrolled}/>
 <Container>
<div className="hero">
  <img src={BackgroundImage} className="bg" alt="bg" />
  <div className="container">
    <div className="">
      <img src={MovieLogo} className="movie-logo" alt="movielogo" srcset="" />
      <div className="text">
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quo placeat nisi saepe optio iure exercitationem natus illum sunt at! Officia est ea fuga eum a saepe distinctio cum adipisci cupiditate!</p>
      </div>
    </div>
    <div className="button">
      <button onClick={()=> navigate("/player")}><FaPlay/> Play</button>
      <button><AiOutlineInfoCircle/> My List</button>
    </div>
  </div>
</div>

 </Container>

 </>
  )
}

const Container = styled.div`

  width:100vw;
  height: 100vh;
  background-color: blue;
  

  .hero{
    /* position: relative;
    top: 0; */
 .bg{
  width:100vw;
    height:30rem;
    /* filter: brightness(60%); */
   
    /* z-index: -59; */
    
    
 }
  }

  .container{
    width: 30rem;
    height: 40rem;
    position: absolute;
    top: 4rem;
    padding-left: .5rem;
  }

  
.movie-logo{
  width: 30rem;
  height: 20rem;
}

.button{
  margin:.5rem 0;
  display: flex;
  width: 12rem;
  justify-content:space-between ;

  button{
    padding: .5rem;
  display: flex;
    align-items: center;
    width: 5rem;
  }
}
`

export default Home