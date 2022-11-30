import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/NetflixLogo.png';
import { Link } from 'react-router-dom';
import { AiOutlinePoweroff, AiOutlineSearch } from 'react-icons/ai';


const Navbar = ({isScrolled}) => {
  const links = [
    { name: 'Home', link: '/' },
    { name: 'TV Shows', link: '/tv' },
    { name: 'Movies', link: '/movies' },
    { name: 'My List', link: '/mylist' },
  ];

  const [showSearch, setShowSearch] = useState(false);


  return (
    <Container>
      <nav className="flex s-btw">
        <div className="flex">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <ul className="flex">
            {links.map(({ name, link }) => {
              return (
                <li key={name} className="li">
                  <Link to={link} className="t-white li">
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right flex">
          <div className={`flex  ${ isScrolled && showSearch? 'search1':showSearch ? "search" : ''}`}>
            <input
              type="text"
              placeholder="Search"
              className={`none search-look ${showSearch ? 'visible' : ''}`}
            />

            <button
              className="btn"
              onClick={() => setShowSearch(true)}
              //   onFocus={() => setShowSearch(true)}
              //   onBlur={() => setShowSearch(false)}
            >
              <AiOutlineSearch style={{marginLeft: showSearch ? "0.2rem" : "13.2rem"}}
           />
            </button>
          </div>
          {/* <button className='btn'>
              <AiOutlinePoweroff />
            </button> */}
        </div>
      </nav>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 4rem;
  position: sticky;
  top: 0;

  nav {
    padding: 0.86rem 0;
    
  }

  .search{
    width: 15rem;
  height: 2.5rem;
  background-color: #291b1b;
  border-radius: 1rem;
  transition: 3s ease-out;
  /* box-shadow: rgba(216, 216, 217, 0.2) 0px 8px 24px; */
  /* display: flex;
  justify-content: center; */

}

 .search1{
    background-color: transparent;
    color: #fff;
    border: 1px solid #dad8d8;
    width: 15rem;
  height: 2.5rem;
  border-radius: 1rem;
  transition: 3s ease-out;
 }
  .search-look{
    width:85%;
    height: 90%;
    margin-left: 0.5rem  ;
    background:transparent;
    border:none; 
    outline:1px; 
    color:#8f8e8e;/* padding: 0.5rem; */
  }


`;
export default Navbar;
