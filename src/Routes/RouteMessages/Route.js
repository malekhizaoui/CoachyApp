import React from 'react'
import { BrowserRouter as Router, Route,Routes  } from 'react-router-dom';

import AllMessages from '../../Screens/Messages/AllMessages'
import PrivateMessage from '../../Screens/Messages/PrivateMessage'
 
function Route() {
  return (
    <Routes>
    <Route path="/" exact element={<AllMessages />} />
    <Route path="/PrivateMessage"  element={<PrivateMessage />} />
    
  </Routes>
  )
}

export default Route