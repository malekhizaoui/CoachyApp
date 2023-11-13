import "./App.css";
import { Navigate, BrowserRouter as Router } from "react-router-dom";
import { StreamChat } from "stream-chat";

import RouteAuth from "./Routes/RouteAuth/RouteAuth";
import { useEffect, useState } from "react";
import RoutePlaningClient from "./Routes/RoutesPlaning/ClientSection/RoutePlaningClient";
import RoutePlaningCaoch from "./Routes/RoutesPlaning/CoachSection/RoutePlaningCaoch";
import RouteProfile from "./Routes/RouteProfile/RouteProfile";
import Login from "./Screens/AuthScreen/Login/Login";
import TabBar from "./Screens/TabBar";
import SignUp from "./Screens/AuthScreen/SignUp/SignUp";
import HomeClient from "./Screens/Planing/ClientSection/Home/Home";
import DomaineCoaching from "./Screens/Planing/ClientSection/DomaineCoaching/DomaineCoaching";
import AllCoachs from "./Screens/Planing/ClientSection/LookAllCoachs/AllCoachs";
import CoachDetail from "./Screens/Planing/ClientSection/CoachDetail/CoachDetail";
import Reservation from "./Screens/Planing/ClientSection/Reservation/Reservation";
import Myprofile from "./Screens/Profile/MyProfile/Myprofile";
import PersonalInfo from "./Screens/Profile/PersonalInformation/PersonalInfo";
import Settings from "./Screens/Profile/Settings/Settings";
import HomeCoach from "./Screens/Planing/CoachSection/Home/Home";
import RouteMessages from "./Routes/RouteMessages/RouteMessages";
import Cookies from "universal-cookie";
import BackIconComponent from "./Components/componentBack/BackIconComponent";
import DirectionMap from "./Components/directionMap/DirectionMap";
import { dataClient } from "./DataBase/clientDB/Data";
import { dataCoach } from "./DataBase/coachDB/Data";
// import dataCoach from "./DataBase/coachDB/Data"
// import dataClient from "./DataBase/clientDB/Data"
function App() {
  const cookies = new Cookies();

  const api_key = "ja2mczkz2wf7";
  const token = localStorage.getItem("token");
  const typeOfUser = localStorage.getItem("typeUser");

  const client = StreamChat.getInstance(api_key);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hideTabBar, setHideTabBar] = useState(false);
  const [hideTabBarforCoachDetail, sethideTabBarforCoachDetail] =
    useState(false);
  const [tabItem, setTabItem] = useState("Planing");
  const [lat, setlat] = useState([]);
  const [long, setlong] = useState([]);
  const [typeUser, setTypeUser] = useState(typeOfUser);

  console.log("typeUser", typeUser);

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("dataUser");
    localStorage.removeItem("typeUser");
    localStorage.removeItem("today");

    setIsLoggedIn(false);
  };

  const getAllData = () => {
    const checkDataCoach = localStorage.getItem("dataCoach");
    const checkDataClient = localStorage.getItem("dataClient");
    if (checkDataCoach === null || checkDataClient === null) {
      localStorage.setItem("dataClient", JSON.stringify(dataClient));
      localStorage.setItem("dataCoach", JSON.stringify(dataCoach));
    }
  };

  const retrieveUserSession = () => {
    if (token) {
      setIsLoggedIn(true);
      setTypeUser(typeOfUser);
      setHideTabBar(true);
      // console.log("helloToken");
      // client
      //   .connectUser(
      //     {
      //       id: cookies.get("userId"),
      //       name: cookies.get("username"),
      //       firstName: cookies.get("firstName"),
      //       lastName: cookies.get("lastName"),
      //       hashedPassword: cookies.get("hashedPassword"),
      //     },
      //     token
      // )   .then((res)=>{
      //   console.log(res);
      //   setIsLoggedIn(true)
      // })
    }
  };
  const openGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${long},${lat}`;
    window.open(googleMapsUrl, "_blank");
  };
  const handleTabItem = (name) => {
    setTabItem(name);
  };

  useEffect(() => {
    retrieveUserSession();
    getAllData();
  }, []);

  return (
    <div className="App">
      {/* <HomeCoach/> */}
      <Router>
        {hideTabBar ? (
          <div>
            {hideTabBarforCoachDetail ? (
              <div style={{ height: 0 }}>
                <DirectionMap openGoogleMaps={openGoogleMaps} />
                <BackIconComponent
                  setHideTabBar={setHideTabBar}
                  sethideTabBarforCoachDetail={sethideTabBarforCoachDetail}
                />
              </div>
            ) : null}{" "}
          </div>
        ) : null}

        {!isLoggedIn ? (
          <RouteAuth
            setIsLoggedIn={setIsLoggedIn}
            setTypeUser={setTypeUser}
            setHideTabBar={setHideTabBar}
          />
        ) : (
          <div style={{ height: "100%", position: "relative", zIndex: 1 }}>
            {tabItem === "Planing" ? (
              <>
                {typeUser !== "Client" ? (
                  <RoutePlaningCaoch
                    setHideTabBar={setHideTabBar}
                    sethideTabBarforCoachDetail={sethideTabBarforCoachDetail}
                    setlat={setlat}
                    setlong={setlong}
                  />
                ) : (
                  <RoutePlaningClient
                    setHideTabBar={setHideTabBar}
                    sethideTabBarforCoachDetail={sethideTabBarforCoachDetail}
                    setlat={setlat}
                    setlong={setlong}
                  />
                )}
              </>
            ) : tabItem === "Profile" ? (
              <RouteProfile logOut={logOut} />
            ) : tabItem === "Messages" ? (
              <RouteMessages setHideTabBar={setHideTabBar} />
            ) : null}
            {hideTabBar ? (
              <TabBar tabItem={tabItem} handleTabItem={handleTabItem} />
            ) : null}
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
