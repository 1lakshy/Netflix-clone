import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../shared/Input/Input';
import Header2 from '../../Header2';

const SignUp1ii = () => {

  const formData = () =>{
    const [formValue,setFormValue] = useState({
      email:"",
      password:""
    })
  }

  return (
    <Container>
      <Header2 />
      <div className="content">
        <div className="img"></div>
        <div className="text">
          <div className="step">Step 1 of 3</div>
          <h1 className="authText-h1">
            Create a password to start your membership
          </h1>
          <p className="authText-p">
            Just a few more steps and you're done!
            <br />
            We hate paperwork, too.
          </p>
        </div>
        <Input text="Email" />
        <Input text="Password"/>


      </div>
    </Container>
  );
};

const Container = styled.div`
width:100vw;


.content{
    width: 100vw;
   
    background: #fff;
    color: #333333;

}
`;

export default SignUp1ii;
