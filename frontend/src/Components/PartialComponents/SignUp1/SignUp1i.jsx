import React from 'react'
import styled from 'styled-components'
import Header2 from '../../Header2';

const SignUp1i = () => {
  return (
   <Container>
    <Header2/>
    <div className="content">
        <div className="img"></div>
        <div className="text">
            <div className="step">Step 1 of 3</div>
            <h1 className='authText-h1'>Finish setting up your account</h1>
            <p className='authText-p'>Netflix is personalised for you. Create a password to watch on any device at any time.</p>       
        </div>
      
    </div>
   </Container>
  )
}

const Container = styled.div`
width:100vw;


.content{
    width: 100vw;
   
    background: #fff;
    color: #333333;

}
`;
export default SignUp1i