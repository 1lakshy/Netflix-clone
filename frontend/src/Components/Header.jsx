import React from 'react'
import { HiGlobeAlt } from "react-icons/hi2";
import { BsCaretDownFill } from "react-icons/bs";
import styled from 'styled-components';
import Logo from "../assets/logo.png"

const Header = () => {
  return (
    <Nav>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="right">
        <div className="btnLang">
          <HiGlobeAlt/>
          <div className="p">
            <p>English</p>
            <BsCaretDownFill style={{fontSize:"0.8rem"}}/>
          </div>
        </div>
        <div className="btn">
      <p>Sign In</p>
        </div>
      </div>
    </Nav>
  )
}

const Nav = styled.div`
width:100vw;
font-family: 'Poppins', sans-serif;
font-weight: 600;
margin: 0 auto;
height:5rem;
color: #fff;
align-items: center;

/* background-color: #fff; */
display: flex;
justify-content: space-between;



  .right{
    display: flex;
    margin-right: 2rem;
    justify-content: space-between;
    align-items: center;
    width: 15rem;
 


    .btnLang{
      display: flex;
      width: 6rem;
      border: 1px solid rgba(255,255,255,0.8);
      align-items: center;
      justify-content: center;
      padding:.4rem 0.2rem;
      border-radius:.2rem;
      color: #fff;

      font-weight: 400;
      .p{
        display: flex;
        align-items: center;
      }
    }

    .btn{
      width: 5rem;
      border-radius: 0.2rem;
      text-align: center;
      padding: .4rem 0;
      
      background-color: #e50914;
      margin-right:1rem ; 
    }

  }

`;
export default Header