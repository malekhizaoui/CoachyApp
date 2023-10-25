import React from 'react'
import { BrowserRouter as Router, Route,Routes  } from 'react-router-dom';

import CoachDetail from '../../../Screens/Planing/ClientSection/CoachDetail/CoachDetail'
import CoachLocation from '../../../Screens/Planing/ClientSection/CoachLocation/CoachLocation'
import DomaineCoaching from '../../../Screens/Planing/ClientSection/DomaineCoaching/DomaineCoaching'
import Home from '../../../Screens/Planing/ClientSection/Home/Home'
import AllCoachs from '../../../Screens/Planing/ClientSection/LookAllCoachs/AllCoachs'
import PaymentScreen from '../../../Screens/Planing/ClientSection/Payment/PaymentScreen'
import Reservation from '../../../Screens/Planing/ClientSection/Reservation/Reservation'

function RoutePlaningClient() {
  return (
    <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Reservation"  element={<Reservation />} />
        <Route path="/PaymentScreen" element={<PaymentScreen/>} />
        <Route path="/AllCoachs" element={<AllCoachs/>} />
        <Route path="/DomaineCoaching" element={<DomaineCoaching/>} />
        <Route path="/CoachLocation" element={<CoachLocation/>} />
        <Route path="/CoachDetail" element={<CoachDetail/>} />
      </Routes>
  )
}

export default RoutePlaningClient