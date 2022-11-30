import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SignUp2i from '../Components/PartialComponents/SignUp2/SignUp2i';
import SignUp2ii from '../Components/PartialComponents/SignUp2/SignUp2ii';

const SignUp2 = () => {
  const SignData = [SignUp2i, SignUp2ii];

  const navigate = useNavigate();

  const [value, setValue] = useState(0);

  const View = SignData[value];
  return (
    <Container>
      <div className="">
        <View />
        <button
          className="authBtn"
          onClick={() => {
            value === 1 ? navigate('/signup3') : setValue(value + 1);
          }}
        >
          Netflix
        </button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  color: #fff;
  width: 100vw;
  height: 100vh;
`;
export default SignUp2;
