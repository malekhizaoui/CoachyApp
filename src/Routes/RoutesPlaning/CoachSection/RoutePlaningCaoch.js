import React from 'react'
import { BrowserRouter as Router, Route,Routes  } from 'react-router-dom';

import  ClientLocation from '../../../Screens/Planing/CoachSection/ClientLocation/ClientLocation'
import  Home from '../../../Screens/Planing/CoachSection/Home/Home'

function RoutePlaningCaoch() {
  return (
    <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/ClientLocation"  element={<ClientLocation/>} />
       
      </Routes>
  )
}

export default RoutePlaningCaoch