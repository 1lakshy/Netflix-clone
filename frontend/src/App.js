import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
// import Navbar from "./Components/Navbar.jsx" 
// import Feed from "./Components/Shared/Feed.jsx"
// import VideoDetail from "./Components/Shared/VideoDetail.jsx"
// import ChannelDetail from "./Components/Shared/ChannelDetail.jsx"
// import SearchFeed from "./Components/Shared/SearchFeed.jsx"
import "./App.css"
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Player from './pages/Player.jsx';
import SignBase from './pages/SignBase.jsx';
import SignUp1 from './pages/SignUp1.jsx';
import SignUp2 from './pages/SignUp2.jsx';



const App = () => {
  return (
<>
<BrowserRouter>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/player' element={<Player/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<SignBase/>}/>
  <Route path='/signup1' element={<SignUp1/>}/>
  <Route path='/signup2' element={<SignUp2/>}/>
</Routes>
</BrowserRouter>
</>
  )
}

export default App

 