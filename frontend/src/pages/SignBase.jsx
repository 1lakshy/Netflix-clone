import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import BackgroundImage from '../Components/BackgroundImage.jsx';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import tv from '../assets/tv.jpg';
import mobile from '../assets/mobile.jpg';
import pc from '../assets/pc.jpg';
import character from '../assets/character.jpg';

const SignBase = () => {
  const data = [
    {
      id: 1,
      boldText: 'Enjoy on your TV.',
      text: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
      source: tv,
    },
    {
      id: 2,
      boldText: 'Download your shows to watch offline.',
      text: 'Save your favourites easily and always have something to watch.',
      source: mobile,
    },
    {
      id: 3,
      boldText: 'Watch everywhere.',
      text: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
      source: pc,
    },
    {
      id: 4,
      boldText: 'Create profiles for children.',
      text: 'Send children on adventures with their favourite characters in a space made just for them—free with your membership.',
      source: character,
    },
  ];

  return (
    <>
      <Container>
        <BackgroundImage />

        <div className="content">
          <Header />
          <div className="body flex column a-center j-center">
            <div className="main">
              <div className="text flex column">
                <h1>
                  Unlimited movies, TV
                  <br />
                  shows and more
                </h1>
                <h4>Watch anyWhere. Cancel anytime.</h4>
                <h6>
                  Ready to watch? Enter your email to create or restart
                  membership
                </h6>
              </div>

              <div className="form">
                <input type="email" placeholder="Email Address" name="email" />
                <input type="password" name="password" placeholder="Password" />
               
            <Link to={"/signup1"}><button>Get Started</button></Link> 
              </div>
              <button>Log In</button>
            </div>
          </div>
        </div>
      </Container>
      {data.map((data) => (
       <Slice key={data.id}>
      
          <div className="">
            <h1>{data.boldText}</h1>
            <h4>{data.text}</h4>
          </div>
          <div className="">
            <img src={data.source} alt="image" style={{ width: '30rem', height:'25rem' }} />
          </div>
          </Slice>
      ))}
      <Footer />
    </>
  );
};

const baseBlack = ' #222222';
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  color: #fff;

  .content {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    /* display: flex; */
    /* flex-direction: column; */

    .body {
      width: 100vw;
      height: calc(100vh-5rem);
      .main {
        width: 60%;
        margin: 0 auto;
        .text {
          h1 {
            font-weight: 600;
            font-size: 4rem;
          }

          h4 {
            font-weight: 600;
            font-size: 2rem;
          }

          h6 {
            font-weight: 600;
            font-size: 1rem;
          }
        }
      }
    }
  }
`;


const Slice = styled.section`
  width: 100vw;
  margin: 0 auto;
  height: 30rem;
  display: flex;
  background-color: red;
  /* margin-bottom: 2rem; */
  border-top: 0.8rem solid ${baseBlack} ;

`;

export default SignBase;
