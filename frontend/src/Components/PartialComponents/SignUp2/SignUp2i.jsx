import React from 'react';
import styled from 'styled-components';
import Header2 from '../../Header2';
import { BsCheck2 } from 'react-icons/bs';

const SignUp2i = () => {
  return (
    <Container>
      <Header2 />
      <div className="content">
        <div className="img"></div>
        <div className="text">
          <div className="step">Step 1 of 3</div>
          <h1 className="authText-h1">Choose your plan.</h1>
          <div className="">
            <BsCheck2 style={{ color: '#e50914' }} />
            <p className="authText-p">
              No commitments, cancel
              <br /> anytime.
            </p>
          </div>

          <div className="">
            <BsCheck2 style={{ color: '#e50914' }} />
            <p className="authText-p">
            Everything on Netflix for one
              <br /> low price.
            </p>
          </div>

          <div className="">
            <BsCheck2 style={{ color: '#e50914' }} />
            <p className="authText-p">
            No ads and no extra fees. Ever.
     
            </p>
          </div>

        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;

  .content {
    width: 100vw;

    background: #fff;
    color: #333333;
  }
`;
export default SignUp2i;
