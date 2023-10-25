import React from "react";
import MessagesIcon from "../../assets/icons/TabBar/MessagesIcon";
import ProfileIcon from "../../assets/icons/TabBar/ProfileIcon";
import PlaningIcon from "../../assets/icons/TabBar/PlaningIcon";
import "./tabBar.css";

function TabBar() {
  return (
    <footer>
      <div className="tabBar">
        <div className="tabList">
          <div className="tabItem1">
            <div style={{ marginLeft: 15 }}>
              <MessagesIcon />
            </div>
            <p className="p-tabBar">Messages</p>
          </div>
          <div className="tabItem2">
            <PlaningIcon />
            <p className="p-tabBar">Planing</p>
          </div>
          <div className="tabItem3">
            <ProfileIcon />

            <p className="p-tabBar">Profile</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default TabBar;
