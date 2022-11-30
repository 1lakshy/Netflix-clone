import React from 'react'
import styled from 'styled-components'
import {BsArrowLeft} from "react-icons/bs"
import video from "../assets/video.mp4";
import { useNavigate } from 'react-router-dom';

const Player = () => {
    const navigate = useNavigate();
  return (

    <Container>
      <button onClick={()=> navigate(-1)} className="back-btn">
      <BsArrowLeft  className="back"/>

      </button>
<video src={video} controls autoPlay loop muted style={{width:"100%",height:"100%" , objectFit:"cover"}}></video>
    </Container>
  
  )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-y: hidden;
.back-btn{
  position: absolute;
  top: 0;
  z-index: 1;
  /* background-color:  #291b1b; */
  margin: 1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
}
`
export default Player