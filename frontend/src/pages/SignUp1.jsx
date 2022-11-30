import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SignUp1i from '../Components/PartialComponents/SignUp1/SignUp1i';
import SignUp1ii from '../Components/PartialComponents/SignUp1/SignUp1ii';
import { useDispatch, useSelector } from 'react-redux';

const SignUp1 = () => {
  const SignData = [SignUp1i, SignUp1ii];

  const navigate = useNavigate();

  const [value, setValue] = useState(0);

  const View = SignData[value];
  const { user } = useSelector((state) => state.auth);

  // alert(user)
  // const handelSave = ()=>{

  // }
  return (
    <Container>
      <div className="">
        <View />
        <button
          className="authBtn"
          onClick={() => {
            value === 1 ? navigate('/signup2') : setValue(value + 1);
          }}
        >
          Netflix
        </button>
        <p style={{color:"#000"}}>{`${user.email}`}</p>
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
export default SignUp1;
