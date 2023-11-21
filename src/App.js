import "./App.css";
import { Navigate, BrowserRouter as Router } from "react-router-dom";

import RouteAuth from "./Routes/RouteAuth/RouteAuth";
import { useEffect, useState } from "react";
import RoutePlaningClient from "./Routes/RoutesPlaning/ClientSection/RoutePlaningClient";
import RoutePlaningCaoch from "./Routes/RoutesPlaning/CoachSection/RoutePlaningCaoch";
import RouteProfile from "./Routes/RouteProfile/RouteProfile";
import TabBar from "./Screens/TabBar";
import RouteMessages from "./Routes/RouteMessages/RouteMessages";
import BackIconComponent from "./Components/componentBack/BackIconComponent";
import DirectionMap from "./Components/directionMap/DirectionMap";
import { dataClient } from "./DataBase/clientDB/Data";
import { dataCoach } from "./DataBase/coachDB/Data";
import { useTranslation } from 'react-i18next';


function App() {

  const token = localStorage.getItem("token");
  const typeOfUser = localStorage.getItem("typeUser");
  const { t,i18n } = useTranslation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hideTabBar, setHideTabBar] = useState(false);
  const [hideTabBarforCoachDetail, sethideTabBarforCoachDetail] =
    useState(false);
  const [tabItem, setTabItem] = useState("Planing");
  const [lat, setlat] = useState([]);
  const [long, setlong] = useState([]);
  const [typeUser, setTypeUser] = useState(typeOfUser);


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

  const changeLang=(lang)=>{
    localStorage.setItem("language",lang)
    i18n.changeLanguage(lang)
  }
  const getLang=async()=>{
    const lang= localStorage.getItem('language')
    if(lang){
     changeLang(lang)
   }else{
     changeLang('fr')
   }
   }
   useEffect(()=>{
     getLang()
   },[])
  return (
    <div className="App">
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
              <RouteProfile logOut={logOut}setHideTabBar={setHideTabBar}
              />
            ) : tabItem === "Messages" ? (
              <RouteMessages setHideTabBar={setHideTabBar} />
            ) : null}
            {hideTabBar ? (
              <TabBar tabItem={tabItem} handleTabItem={handleTabItem} />
            ) : null}
          </div>
        )}
      </Router>
      {/* <SplashScreen/> */}
    </div>
  );
}

export default App;
