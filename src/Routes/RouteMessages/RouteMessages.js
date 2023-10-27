import React from 'react'
import { BrowserRouter as Router, Route,Routes  } from 'react-router-dom';


import AllMessages from '../../Screens/Messages/AllMessages/AllMessages';
import PrivateMessage from '../../Screens/Messages/PrivateMessage/PrivateMessage';
function RouteMessages() {
  return (
    <Routes>
    <Route path="/" exact element={<AllMessages />} />
    <Route path="/PrivateMessage"  element={<PrivateMessage />} />
    
  </Routes>
  )
}

export default RouteMessages