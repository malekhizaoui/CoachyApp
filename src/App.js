import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { StreamChat } from "stream-chat";

import RouteAuth from "./Routes/RouteAuth/RouteAuth";
import { useEffect, useState } from "react";
import RoutePlaningClient from "./Routes/RoutesPlaning/ClientSection/RoutePlaningClient";
import RouteProfile from "./Routes/RouteProfile/RouteProfile";
import Login from "./Screens/AuthScreen/Login/Login";
import TabBar from "./Screens/TabBar";
import SignUp from "./Screens/AuthScreen/SignUp/SignUp";
import Home from "./Screens/Planing/ClientSection/Home/Home";
import DomaineCoaching from "./Screens/Planing/ClientSection/DomaineCoaching/DomaineCoaching";
import AllCoachs from "./Screens/Planing/ClientSection/LookAllCoachs/AllCoachs";
import CoachDetail from "./Screens/Planing/ClientSection/CoachDetail/CoachDetail";
import Reservation from "./Screens/Planing/ClientSection/Reservation/Reservation";
import Myprofile from "./Screens/Profile/MyProfile/Myprofile";
import PersonalInfo from "./Screens/Profile/PersonalInformation/PersonalInfo";
import Settings from "./Screens/Profile/Settings/Settings";
import Cookies from "universal-cookie";
import BackIconComponent from "./Components/componentBack/BackIconComponent";
import DirectionMap from "./Components/directionMap/DirectionMap";
function App() {
  const cookies = new Cookies();

  const api_key = "ja2mczkz2wf7";
  const token = cookies.get("token");
  const client = StreamChat.getInstance(api_key);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hideTabBar, setHideTabBar] = useState(true);
  const [hideTabBarforCoachDetail, sethideTabBarforCoachDetail] = useState(false);
  const [tabItem, setTabItem] = useState("Planing");
  const [lat,setlat]=useState([])
  const [long,setlong]=useState([])
  const retrieveUserSession = () => {
    setIsLoggedIn(true);

    //   if (token) {
    //     console.log("helloToken");
    //     client
    //       .connectUser(
    //         {
    //           id: cookies.get("userId"),
    //           name: cookies.get("username"),
    //           firstName: cookies.get("firstName"),
    //           lastName: cookies.get("lastName"),
    //           hashedPassword: cookies.get("hashedPassword"),
    //         },
    //         token
    //       )   .then(()=>{
    //         setIsLoggedIn(true)
    //       })
    // }
    
  };
  const openGoogleMaps = () => {
    console.log("lat",lat);
    console.log("long",long);
      const googleMapsUrl = `https://www.google.com/maps?q=${long},${lat}`;
      window.open(googleMapsUrl, "_blank");
    
  };
  const handleTabItem = (name) => {
    setTabItem(name);
  };

  console.log("hideTabBar,", hideTabBar);
  useEffect(() => {
    retrieveUserSession();
  }, []);

  return (
    <div className="App">
      <Router>
        {hideTabBar ? <div>
          
          {hideTabBarforCoachDetail?(
          <div style={{ height: 0 }}>
            <DirectionMap openGoogleMaps={openGoogleMaps}/>
            <BackIconComponent setHideTabBar={setHideTabBar} sethideTabBarforCoachDetail={sethideTabBarforCoachDetail} />
          </div>
        ):null} </div>: null}
        {!isLoggedIn ? (
          <RouteAuth setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <div style={{ height: "100%", position: "relative", zIndex: 1 }}>
            {tabItem === "Planing" ? (
              <RoutePlaningClient setHideTabBar={setHideTabBar} sethideTabBarforCoachDetail={sethideTabBarforCoachDetail} setlat={setlat} setlong={setlong} />
            ) : tabItem === "Profile" ? (
              <RouteProfile />
            ) : null}
            {!hideTabBar ? (
              <TabBar tabItem={tabItem} handleTabItem={handleTabItem} />
            ) : null}
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
