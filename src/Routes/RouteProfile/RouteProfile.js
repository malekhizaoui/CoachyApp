import React from 'react'
import { BrowserRouter as Router, Route,Routes  } from 'react-router-dom';
import MyProfile from '../../Screens/Profile/MyProfile/Myprofile'
import PersonalInformation from '../../Screens/Profile/PersonalInformation/PersonalInfo'
import SessionHistory from '../../Screens/Profile/SessionHistory/SessionHistory'
import Settings from '../../Screens/Profile/Settings/Settings'
import Availability from '../../Screens/Profile/Availability/Availability'
import UpdateAge from '../../Screens/Profile/PersonalInformation/updateAge/UpdateAge'
import UpdateName from '../../Screens/Profile/PersonalInformation/updateName/UpdateName'
import Language from '../../Screens/Profile/Settings/languages/Language';
function RouteProfile({logOut,setHideTabBar}) {
  return (
    <Routes>
        <Route path="/" exact element={<MyProfile />} />
        <Route path="/PersonalInformation"  element={<PersonalInformation />}/>
        <Route path="/SessionHistory" element={<SessionHistory/>}/>
        <Route path="/Settings" element={<Settings logOut={logOut} setHideTabBar={setHideTabBar}/>}/>
        <Route path="/Availability" element={<Availability/>}/>
        <Route path="/UpdateAge" element={<UpdateAge/>}/>
        <Route path="/UpdateName" element={<UpdateName/>}/>
        <Route path="/Language" element={<Language setHideTabBar={setHideTabBar}/>}/>
      </Routes>
  )
}

export default RouteProfile