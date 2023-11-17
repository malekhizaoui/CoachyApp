import React from "react";
import MessagesIcon from "../../assets/icons/TabBar/MessagesIcon";
import ProfileFocusedIcon from "../../assets/icons/TabBar/ProfileFocusedIcon";
import ProfileIcon from "../../assets/icons/TabBar/ProfileIcon";
import PlaningFocusedIcon from "../../assets/icons/TabBar/PlaningFocusedIcon";
import PlaningIcon from "../../assets/icons/TabBar/PlaningIcon";
import MessageFocusedIcon from "../../assets/icons/TabBar/MessageFocusedIcon";
import { useNavigate } from "react-router-dom";

import "./tabBar.css";
import RoutePlaningClient from "../../Routes/RoutesPlaning/ClientSection/RoutePlaningClient";

function TabBar({ handleTabItem, tabItem }) {
  const navigate = useNavigate();

  return (
    <footer className="tabBar">
      <div className="tabBar">
        <div className="tabList">

        {/* Tab Messages */}

        <div className="tabItem1" onClick={() => {handleTabItem("Messages");navigate('/')}}>
            {tabItem !== "Messages" ? <MessagesIcon /> : <MessageFocusedIcon />}
            <p className="p-tabBar" style={tabItem === "Messages"?{color:"#5D54A0"}:null}>Messages</p>
          </div>

        {/* Tab Planing */}

        <div className="tabItem2" onClick={() => {handleTabItem("Planing");navigate('/')}}  >
            {tabItem !== "Planing" ? <PlaningIcon /> : <PlaningFocusedIcon />}
            <p className="p-tabBar" style={tabItem === "Planing"?{color:"#5D54A0"}:null}>Planing</p>
          </div>

        {/* Tab Profile */}

          <div className="tabItem3" onClick={() => {handleTabItem("Profile");navigate('/')}}>
            {tabItem !== "Profile" ? <ProfileIcon /> : <ProfileFocusedIcon />}
            <p className="p-tabBar" style={tabItem === "Profile"?{color:"#5D54A0"}:null}>Profile</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default TabBar;
