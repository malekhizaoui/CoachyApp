import React from 'react'
import { BrowserRouter as Router, Route,Routes  } from 'react-router-dom';

import SignUp from '../../Screens/AuthScreen/SignUp/SignUp';
 
import Login from '../../Screens/AuthScreen/Login/Login';
function RouteAuth({setIsLoggedIn}) {
  return (
    <Routes>
    <Route path="/" exact element={<Login setIsLoggedIn={setIsLoggedIn} />} />
    <Route path="/Login"  element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
  </Routes>
  )
}

export default RouteAuth