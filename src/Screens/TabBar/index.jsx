import React from "react";
import MessagesIcon from "../../assets/icons/TabBar/MessagesIcon";
import ProfileFocusedIcon from "../../assets/icons/TabBar/ProfileFocusedIcon";
import ProfileIcon from "../../assets/icons/TabBar/ProfileIcon";
import PlaningFocusedIcon from "../../assets/icons/TabBar/PlaningFocusedIcon";
import PlaningIcon from "../../assets/icons/TabBar/PlaningIcon";
import { useNavigate } from "react-router-dom";

import "./tabBar.css";
import RoutePlaningClient from "../../Routes/RoutesPlaning/ClientSection/RoutePlaningClient";

function TabBar({ handleTabItem, tabItem }) {
  const navigate = useNavigate();

  return (
    <footer>
      <div className="tabBar">
        <div className="tabList">
          <div
            className="tabItem1"
            onClick={() => {
              handleTabItem("Messages");
            }}
          >
            <div style={{ marginLeft: 15 }}>
              <MessagesIcon />
            </div>
            <p className="p-tabBar">Messages</p>
          </div>
          <div
            className="tabItem2"
            onClick={() => {
              handleTabItem("Planing");
              navigate('/')

            }}
          >
            {tabItem !== "Planing" ? <PlaningIcon /> : <PlaningFocusedIcon />}
            <p className="p-tabBar" style={tabItem === "Planing"?{color:"#5D54A0"}:null}>Profile</p>
          </div>
          <div
            className="tabItem3"
            onClick={() => {
              handleTabItem("Profile");
              navigate('/')

            }}
          >
            {tabItem !== "Profile" ? <ProfileIcon /> : <ProfileFocusedIcon />}

            <p className="p-tabBar" style={tabItem === "Profile"?{color:"#5D54A0"}:null}>Profile</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default TabBar;
