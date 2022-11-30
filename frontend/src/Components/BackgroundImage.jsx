import React from 'react'
import background from "../assets/login.jpg"
import styled from "styled-components"

const Background = () => {
  return (
<Container>
  <img src={background} alt="background" />
</Container>
  )
}

const Container = styled.div`
width:100vw;
height:100vh;
img{
  width: 100vw;
  height: 100vh;
}
`;

export default Background