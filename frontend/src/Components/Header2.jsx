import React from 'react'

const Header2 = () => {
  return (
    <div style={{backgroundColor:"#fff",height:"4rem",width:"100vw",borderBottom:"1px solid #222222"}}>
        <div className="logo">
            <img src="../assets/logo.png" alt="logo"/>
        </div>
        <div style={{color:"black"}}>
            <p>Sign In</p>
        </div>
    </div>
  )
}

export default Header2